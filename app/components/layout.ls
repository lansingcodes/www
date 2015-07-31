# Components
require! {
  './navigation': Navigation
}

module.exports = class Layout extends React.Component

  render: ->
    $div do
      $(Navigation)!
      @props.children
