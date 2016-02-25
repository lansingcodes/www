# Bootstrap
require! <[
  react-bootstrap/lib/Grid
]>

# Components
require! {
  './button': Button
}

module.exports = class Contact extends React.Component

  component-will-mount: !->
    if window?
      timeout = set-timeout !~>
        return new WOW!.init! if WOW?
        @component-will-mount!
      , 100

  render: ->
    $aside id: 'contact', class-name: 'bg-dark',
      $(Grid) class-name: 'text-center',
        $div class-name: 'call-to-action',
          $h2 "Know a resource or event we're missing?"
          $(Button) do
            href: 'mailto:chrisvfritz@gmail.com'
            class-name: 'wow tada'
            icon: 'fa-envelope'
            "Contact us"
