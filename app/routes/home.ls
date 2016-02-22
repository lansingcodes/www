# Components
require! {
  './base-route': BaseRoute
  '../components/layout': Layout
  '../components/welcome': Welcome
  '../components/events': Events
  '../components/meetups': Meetups
  '../components/beginner-resources': BeginnerResources
  '../components/contact': Contact
}

module.exports = class HomeRoute extends BaseRoute

  render: ->
    $(Layout) do
      $(Welcome)!
      $(Events)!
      $(Meetups)!
      $(BeginnerResources)!
      $(Contact)!
