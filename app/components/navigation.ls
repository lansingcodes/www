# Bootstrap
require! <[
  react-bootstrap/lib/Navbar
  react-bootstrap/lib/CollapsibleNav
  react-bootstrap/lib/Nav
  react-bootstrap/lib/NavItem
  react-bootstrap/lib/Affix
]>

# Components
require! {
  './logo': Logo
}

module.exports = class Navigation extends React.Component

  !->
    @state = at-top: @is-at-top!

  component-will-mount: !->
    global.onscroll = !~>
      @set-state at-top: @is-at-top!

  component-will-unmount: !->
    global.onscroll = undefined

  is-at-top: (event) ->
    not document? or document.body.scroll-top < 30

  render: ->
    $(Navbar) do
      fixed-top: true
      fluid: true
      toggle-nav-key: 0
      class-name: if @state.at-top then '' else 'affix'
      brand: $div do
        $(Logo) size: 30
        'Lansing Codes'

      $(CollapsibleNav) event-key: 0,
        $(Nav) navbar: true, right: true,
          $(NavItem) event-key: 1, href: 'http://startuplansing.org/learn-to-code', target: '_blank', 'Learn'
          $(NavItem) event-key: 2, href: '#calendar', 'Calendar'
          $(NavItem) event-key: 3, href: '#contact', 'Contact'
