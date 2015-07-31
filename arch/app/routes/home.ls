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

  render: ->
    $(Layout) do
      $(Welcome)!
      $(Events)!
      $(Meetups)!
      $(Contact)!
