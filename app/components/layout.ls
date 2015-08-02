# Components
require! {
  './navigation': Navigation
}

module.exports = class Layout extends React.Component

  render: ->
    $div do
      # $(Radium.Style) rules: styles
      $(Navigation)!
      @props.children

# styles =
#
#   'html, body, #application, #application > div':
#     width: '100%'
#     height: '100%'
#
#   body:
#     font-family: 'Merriweather, Helvetica Neue, Arial, sans-serif'
#
#   hr:
#     max-width: 50
#     border-color: '#407cbf'
#     border-width: 3
#
#   'hr.light':
#     border-color: '#fff'
#
#   a:
#     color: '#407cbf'
#     transition: 'all .35s'
#
#   'a:hover, a:focus':
#     color: '#3569A6'
#
#   '.table a'
#     color: 'white'
