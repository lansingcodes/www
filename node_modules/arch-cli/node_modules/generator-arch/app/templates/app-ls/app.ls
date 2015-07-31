# module dependencies
require! <[ arch ]>

# route components
require! <[
  ./routes/welcome
  ./routes/not-found
]>

initial-state =
  message: 'I am immutable!'

module.exports = arch.application.create do
  get-initial-state: ->
    initial-state

  start: (app-state) ->
    app-state.get \state.message .update -> 'I was updated!'

  routes: ->
    page = arch.routes.page

    arch.routes.define do
      page '/', welcome
      page '*', not-found
