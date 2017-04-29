var drop = document.querySelector('.drop');
var message = drop.querySelector('.message');
var progress = document.querySelector('.progress');
var progressBar = progress.querySelector('span');

drop.addEventListener('dragover', function(event) {
  event.preventDefault();
  event.stopPropagation();
});

drop.addEventListener('drop', function(event) {
  event.stopPropagation();
  event.preventDefault();

  var files = event.dataTransfer.files;
  var file = files[0];

  if (!file) {
    return;
  }

  var size = file.size;
  var type = file.type;

  if (size > 15000000) {
    message.textContent = 'Sorry, uploads must be less than 15MB';
    message.classList.add('error');
    return;
  }

  if (type !== 'application/zip' && type !== 'application/x-zip-compressed' && type !== 'application/octet-stream') {
    message.textContent = 'Hmm, this doesn\'t look like a .lovr or .zip file';
    message.classList.add('error');
    return;
  }

  message.textContent = '';
  message.classList.remove('error');

  var form = new FormData();
  form.append('file', file);

  var xhr = new XMLHttpRequest();
  xhr.open('post', '/api/share', true);

  xhr.addEventListener('progress', function(event) {
    if (event.lengthComputable) {
      var percent = event.loaded / event.total;
      progress.style.opacity = 1;
      progressBar.style.width = (percent * 100) + '%';
    }
  });

  xhr.onreadystatechange = function(event) {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status !== 200) {
        var messages = {
          'unzip': 'There was a problem reading your upload.',
          'too many files': 'Wow, there are too many files in here! (max 1000)',
          'no main': 'I couldn\'t find a main.lua in there!',
          'absolute': 'Your upload was not packaged correctly.',
          'too big': 'Woah there, your upload was over 25MB!',
          'packing': 'I couldn\'t package your app, sorry!'
        };

        var message = messages[xhr.responseText] || 'There was a problem with the upload, sorry!';

        if (xhr.status === 413) {
          message = 'Sorry, uploads must be less than 15MB';
        }

        message.textContent = message;
        message.classList.add('error');
        return;
      }

      progressBar.style.width = '100%';
      var result = JSON.parse(xhr.responseText);
      window.location = '/play/' + result.id;
    }
  };

  xhr.send(form);

  message.textContent = 'Uploading...';
});
