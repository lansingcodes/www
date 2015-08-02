require! {
  './button': Button
}

module.exports = Radium class Welcome extends React.Component

  render: ->
    $header do
      key: \welcome-header
      style: styles.header.base
      $div do
        key: \welcome-header-content
        style: styles.header-content.base
        $div style: styles.header-content-inner.base,
          $h1 do
            key: \welcome-heading
            style: styles.heading.base
            'Events for Lansing coders'
          $hr style: styles.divider.base
          $p do
            "If you code or aspire to, professionally or as a hobby, welcome."
            $br!
            "This is your home. We are your people."

          $(Button) do
            type: \primary
            icon: \fa-calendar
            href: '#calendar'
            'data-scroll': true
            "Browse the calendar"

styles =

  header:

    base:
      position: \relative
      width: '100%'
      min-height: \auto
      text-align: \center
      color: '#fff'
      background-image: 'url(/dist/images/header.jpg)'
      background-position: \center
      background-size: \cover

      '@media (min-width: 768px)':
        min-height: '100%'

  header-content:

    base:
      position: \relative
      width: '100%'
      padding: '100px 15px'
      text-align: \center
      background-color: 'rgba(0,0,0,0.5)'
      box-shadow: '0 0 200px 100px rgba(0,0,0,0.5)'

      '@media (min-width: 768px)':
        position: \absolute
        top: '50%'
        padding: '0 50px'
        transform: 'translateY(-50%)'

  header-content-inner:

    base:
      margin-right: \auto
      margin-left: \auto
      max-width: 1000

  heading:

    base:
      margin-top: 0
      margin-bottom: 0
      text-transform: \uppercase
      font-weight: 700
      font-size: 65

      '@media (max-width: 767px)':
        font-size: 36

  divider:

    base:
      margin: '30px auto'
