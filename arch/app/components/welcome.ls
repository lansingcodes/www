require! {
  './button': Button
}

module.exports = Radium class Welcome extends React.Component

  render: ->
    $header do
      $div do
        class-name: 'header-content'
        style:
          background-color: 'rgba(0,0,0,0.5)'
          box-shadow: '0 0 200px 100px rgba(0,0,0,0.5)'
        $div class-name: 'header-content-inner',
          $h1 do
            style: styles.heading.base
            'Events for Lansing coders'
          $hr!
          $p do
            "If you code or aspire to, professionally or as a hobby, welcome."
            $br!
            "This is your home. We are your people."

          $(Button) do
            type: \primary
            icon: \fa-calendar
            href: '#calendar'
            "Browse the calendar"

styles =

  heading:

    base:
      '@media (min-width: 768px)':
        font-size: 65
