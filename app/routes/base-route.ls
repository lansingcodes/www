html = '<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Events for Lansing coders">

    <title>{title}</title>
    <link rel="shortcut icon" href="/favicon.ico?v=1">

    <link rel="stylesheet"
      href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
    <link rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic">
    <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.3.0/animate.min.css">
    <link rel="stylesheet"
      href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet"
      href="dist/css/style.css">
    <link rel="stylesheet"
      href="/dist/css/font-mfizz.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js does not work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body id="page-top">
    {body}
    <script src="//cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js"></script>
  </body>
</html>
'

# This is a base route for convenient definition of outer layout and
# page title. All route components inherit from this class
module.exports = class BaseRoute extends React.Component

  get-layout-template: ->
    # TODO replace me with an actual template.
    # Jade is a good template engine for example.
    (context) ->
      html.replace '{body}', context.body .replace '{title}', context.title

  get-title: ->
    base-title = 'Lansing Codes'
    title = @title! if @title?
    if title then "#base-title | #title" else base-title
