require! <[
  react-bootstrap/lib/Grid
  react-bootstrap/lib/Row
  react-bootstrap/lib/Col
]>

require! {
  '../config/beginner-resources': beginner-resources
}

module.exports = class LearningOpportunities extends React.Component

  render: ->
    $section do
      id: 'beginner-resources'
      class-name: 'bg-primary'
      $(Grid) do
        $(Row) do
          $(Col) lg: 12, class-name: 'text-center',
            $h2 class-name: 'section-heading', 'Beginner Resources'
            $p "where to start if you're new to coding"
            $hr class-name: 'primary'
        $(Row) do
          beginner-resources |> map (resource) ->
            $(Col) md: 6,
              $h2 resource.title
              $div dangerously-set-inner-HTML:
                __html: resource.desc
