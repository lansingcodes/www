require! {
  './base-route': BaseRoute
  arch
}
layout = arch.dom require '../components/layout'

d = arch.DOM

module.exports = class WelcomeRoute extends BaseRoute
  get-title: -> super "Welcome!"
  render: ->
    layout do
      d.h1 "Welcome! This is your first Arch app."
      d.p (@props.app-state.get \state.message).deref!
