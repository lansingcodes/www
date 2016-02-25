# Bootstrap
require! <[
  react-bootstrap/lib/Navbar
  react-bootstrap/lib/CollapsibleNav
  react-bootstrap/lib/Nav
  react-bootstrap/lib/NavItem
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
      brand: $a do
        href: '#page-top'
        'data-scroll': true
        $(Logo) size: 30
        'Lansing Codes'

      $(CollapsibleNav) event-key: 0,
        $(Nav) navbar: true, right: true,
          $(NavItem) do
            event-key: 2
            href: 'http://slack.lansing.codes/'
            target: '_blank'
            'Slack'
          $(NavItem) do
            event-key: 4
            href: '#calendar'
            link-props:
              'data-scroll': true
            'Calendar'
          $(NavItem) do
            event-key: 3
            href: '#meetups'
            link-props:
              'data-scroll': true
            'Meetups'
          $(NavItem) do
            event-key: 1
            href: '#beginner-resources'
            link-props:
              'data-scroll': true
            'Beginner Resources'
          $(NavItem) do
            event-key: 1
            href: '#membership-organizations'
            link-props:
              'data-scroll': true
            'Membership Organizations'
          $(NavItem) do
            event-key: 5
            href: '#contact'
            link-props:
              'data-scroll': true
            'Contact'
