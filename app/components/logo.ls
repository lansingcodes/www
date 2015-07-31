module.exports = class Logo extends React.Component

  render: ->
    $img do
      alt: 'Logo'
      src: '/dist/images/icon-tall-square-fixed-300-transparent.png'
      style:
        display: 'inline-block'
        width: 30
        height: 30
        margin-top: -5
        margin-right: 10
