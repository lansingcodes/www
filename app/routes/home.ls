# Components
require! {
  './base-route': BaseRoute
  '../components/layout': Layout
  '../components/welcome': Welcome
  '../components/events': Events
  '../components/meetups': Meetups
  '../components/contact': Contact
}

module.exports = class HomeRoute extends BaseRoute

  title: -> 'Home'

  component-will-mount: !->
    try do
      document? and document
        .get-element-by-id 'slack-inviter'
        .content-window
        .scroll-to 0, 120

  render: ->
    $(Layout) do
      $(Welcome)!
      $iframe do
        id: \slack-inviter
        height: 400
        scrolling: \no
        src: 'http://slack.lansing.codes/'
        style:
          width: '100%'
          border: \none
      $(Events)!
      $(Meetups)!
      $(Contact)!
