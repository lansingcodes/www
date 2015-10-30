# Globals
require './globals'

if window?
  # Removes 300ms delay on tap on mobile devices
  # https://github.com/zilverline/react-tap-event-plugin
  # require('react-tap-event-plugin')!
  # Activates smooth scrolling for data-scroll element
  require('smooth-scroll').init do
    speed: 500
    easing: \easeInOutCubic
    update-url: true
    offset: 51

module.exports = arch.application.create do

  get-initial-state: ->
    {}

  start: (app-state) ->
    console.log 'App started...'

  routes: ->
    page = arch.routes.page
    route-to = -> require "./routes/#{it}"

    arch.routes.define do
      page '/', route-to \home
      page '*', route-to \not-found
