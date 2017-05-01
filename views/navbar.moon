import Widget from require 'lapis.html'

Logo = require 'views.logo'

class Navbar extends Widget
  content: =>
    nav ->
      div class: 'logo', ->
        a href: '/', ->
          widget Logo
          span 'LÖVR'

      div class: 'links', ->
        a href: '/docs', 'Documentation'
        a href: '/examples', 'Examples'
        a href: '/share', 'Upload'

        div class: 'right', ->
          a href: 'https://github.com/bjornbytes/lovr', target: '_blank', 'GitHub'
          a href: 'https://twitter.com/bjornbytes', target: '_blank', 'Twitter'
