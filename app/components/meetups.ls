require! <[
  react-bootstrap/lib/Grid
  react-bootstrap/lib/Row
  react-bootstrap/lib/Col
]>

require! {
  '../config/meetups'
}

module.exports = class Meetups extends React.Component

  render: ->
    $section id: 'meetups',
      $(Grid) do
        $(Row) do
          $(Col) lg: 12, class-name: 'text-center',
            $h2 do
              class-name: 'section-heading'
              'Free Meetups'

            $p 'regular meetups to help you become a better coder'
            $hr class-name: 'primary'
      $(Grid) do
        meetups
          |> chunk 4
          |> map (meetup-row) ->
            $(Row) do
              meetup-row |> map (meetup) ->
                $(Col) lg: 3, sm: 6, class-name: 'text-center',
                  $div class-name: 'service-box'
                    $a href: meetup.url,
                      $i class-name: "fa fa-4x text-primary #{meetup.icon}"
                      $h3 meetup.name
                    $h4 class-name: 'text-muted', meetup.on
                    $p do
                      class-name: 'text-muted'
                      dangerously-set-inner-HTML:
                        __html: meetup.desc
