require! {
  '../config/beginner-resources'
  '../config/meetups'
}

meetup-keywords = meetups
  |> map (.name.to-lower-case!)
  |> (.join ',')

beginner-resources-keywords = beginner-resources
  |> map (.title.to-lower-case!)
  |> (.join ',')

const dynamic-keywords = [
  meetup-keywords
  beginner-resources-keywords
].join ','

# This is a base route for convenient definition of outer layout and
# page title. All route components inherit from this class
module.exports = class BaseRoute extends React.Component

  get-layout-template: ->
    # TODO replace me with an actual template.
    # Jade is a good template engine for example.
    (context) ->
      html.replace '{body}', context.body .replace '{title}', context.title

  get-title: ->
    base-title = 'Lansing.Codes'
    title = @title! if @title?
    if title then "#{base-title} | #{title}" else base-title

html = """
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <title>{title}</title>
      <meta property="og:title" content="Lansing.Codes">
      <meta name="description" content="Resources for coders and community organizers of Lansing, MI.">
      <meta property="og:description" content="Resources for coders and community organizers of Lansing, MI.">

      <meta name="keywords" content="lansing mi,lansing codes,meetups,events,code,coding,programming,hackathon,learning to code,coding resources,programming resources,learn to code,#{dynamic-keywords}">

      <meta name="geo.region" content="US-MI">
      <meta name="geo.placename" content="Greater Lansing">
      <meta name="geo.position" content="42.734552;-84.480615">
      <meta name="ICBM" content="42.734552, -84.480615">

      <meta property="og:type" content="website">
      <meta property="og:url" content="https://www.lansing.codes/">
      <meta property="og:locale" content="en_US">
      <meta property="og:site_name" content="Lansing.Codes">

      <meta property="og:image" content="https://lansingcodelab.com/assets/lansing-codes-logo-9e6ac994d59c9a70059b448374a1062c8eb048e502007722dde298eba85be667.svg">
      <meta property="og:image:type" content="image/svg+xml">
      <meta property="og:image:width" content="300">
      <meta property="og:image:height" content="300">

      <meta property="fb:admins" content="2327791">
      <meta property="fb:admins" content="2335756">
      <meta property="fb:admins" content="1261535380">

      <link rel="shortcut icon" href="/dist/favicon.ico?v=3">

      <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic">
      <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.3.0/animate.min.css">
      <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="/dist/css/style.css">
      <link rel="stylesheet" type="text/css" href="/dist/css/font-mfizz.css">

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
"""
