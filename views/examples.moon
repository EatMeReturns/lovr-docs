import Widget from require 'lapis.html'

Navbar = require 'views.navbar'

class Examples extends require 'views.page'
  sidebar_content: =>
    h2 'Examples'
    ul ->
      for i, key in ipairs @examples do
        @sidebar_link key

  content: =>
    @content_for 'head', ->
      link rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inconsolata'
      link rel: 'stylesheet', href: '/static/css/docs.css'
      link rel: 'stylesheet', href: '/static/css/tomorrow-night-blue.css'

    widget Navbar
    @sidebar!

    main class: 'examples', ->
      iframe class: 'preview'
      div class: 'content', ['data-key']: @page, ->
        raw @contents

    script type: 'text/javascript', -> raw "window.config = { base: '/examples', api: '/api/examples' };"
    script src: '/static/js/docs.js', async: true
