require! {
  './base-route': BaseRoute
  arch
}
layout = arch.dom require '../components/layout'

d = arch.DOM

module.exports = class NotFoundRoute extends BaseRoute
  get-title: -> super "Not Found"
  render: ->
    layout do
      d.h1 "Page Not Found"
