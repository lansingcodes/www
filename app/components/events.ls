# Bootstrap
require! <[
  react-bootstrap/lib/Grid
  react-bootstrap/lib/Row
  react-bootstrap/lib/Col
]>

# Components
require! {
  'isomorphic-fetch': fetch
}

module.exports = class UpcomingEvents extends React.Component

  !->
    @state =
      json: undefined

  component-will-mount: ->
    fetch('//api.lansing.codes/v1/events/upcoming/list')
      .then (response) -> response.json!
      .then (json) !~> @set-state json: json

  render: ->
    $section id: 'calendar', class-name: 'bg-primary',
      $(Grid) do
        $(Row) do
          $(Col) lg: 12, class-name: 'text-center',
            $h2 class-name: 'section-heading', 'Upcoming Events'
            if @state.json?
              $table do
                style:
                  text-align: \left
                  margin: '20px auto 0'
                $tbody do
                  @state.json.data |> map (event) ~>
                    group = @state.json.includes.groups[event.relationships.group]
                    $tr do
                      $td do
                        style:
                          padding: '5px 20px 5px 0'
                        "in #{event.attributes.time.relative}"
                      $td do
                        style:
                          padding: '5px 20px 5px 0'
                        $a do
                          style:
                            color: \white
                          href: event.links.self
                          "#{event.attributes.name} (#{ group.attributes.focus or group.attributes.name })"
            else
              $p 'Loading...'
