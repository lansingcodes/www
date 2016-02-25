require! <[
  react-bootstrap/lib/Grid
  react-bootstrap/lib/Row
  react-bootstrap/lib/Col
]>

require! {
  '../config/membership-organizations': membership-organizations
}

module.exports = class LearningOpportunities extends React.Component

  render: ->
    $section do
      id: 'membership-organizations'
      $(Grid) do
        $(Row) do
          $(Col) lg: 12, class-name: 'text-center',
            $h2 class-name: 'section-heading', 'Membership Organizations'
            $p 'professional organizations providing resources and advocacy'
            $hr class-name: 'primary'
        $(Row) do
          membership-organizations |> map (resource) ->
            $(Col) md: 6,
              $h2 do
                $a do
                  href: resource.url
                  resource.title
              $div dangerously-set-inner-HTML:
                __html: resource.desc
