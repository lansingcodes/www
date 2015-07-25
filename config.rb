require 'slim'

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

MEETUPS = [
  # 1st Tuesday
  {
    name: 'DevOps',
    desc: "If you want to actually <em>ship</em>, scale, or collaborate with a team, you'll need to level up your development operations skills.",
    icon: 'fa-server',
    url: 'http://www.meetup.com/Lansing-DevOps-Meetup/',
    on: '1st Tuesday'
  },
  # 2nd Tuesday
  {
    name: 'Ruby',
    desc: "Designed for developer happiness, this language is especially popular (and powerful) for rapid, server-side web development - without the steep learning curve.",
    icon: 'icon-ruby',
    url: 'http://www.meetup.com/Lansing-Ruby-Meetup-Group/',
    on: '2nd Tuesday'
  },
  # 2nd Tuesday
  {
    name: 'Project Management',
    desc: "As a project's complexity and team grows, managing the process becomes vital.",
    icon: 'fa-pie-chart',
    url: 'http://www.meetup.com/PMI-Capital-Area-Chapter-Lunch-and-Learn/',
    on: '2nd Tuesday'
  },
  # 2nd Wednesday
  {
    name: 'Web',
    desc: "A more general meetup on web development with a greater concentration of .NET folks.",
    icon: 'icon-html',
    url: 'http://www.meetup.com/lansingweb/',
    on: '2nd Wednesday'
  },
  # 3rd Tuesday
  {
    name: 'JavaScript',
    desc: "When coding on the client, there's really only one choice; fortunately, it has one of the most thriving and innovative communities around.",
    icon: 'icon-javascript',
    url: 'http://www.meetup.com/Lansing-Javascript-Meetup/',
    on: '3rd Tuesday'
  },
  # 3rd Thursday
  {
    name: '.NET',
    desc: "One of the most popular ecosystems for enterprise web development, with tooling built and supported by Microsoft.",
    icon: 'icon-csharp',
    url: 'http://www.meetup.com/GLUGnet/',
    on: '3rd Thursday'
  },
  # 4th Monday
  {
    name: 'Mobile',
    desc: "For development on iOS or Android, this the place to be.",
    icon: 'icon-mobile-device',
    url: 'http://www.meetup.com/MoMoLansing/',
    on: '4th Monday'
  },
  # 4th Tuesday
  {
    name: 'Java',
    desc: "One of the most popular languages in the world with an incredibly rich ecosystem.",
    icon: 'icon-java-bold',
    url: 'https://sites.google.com/site/greaterlansingjug/',
    on: '4th Tuesday'
  },
  # 4th Tuesday
  {
    name: 'Agile',
    desc: "It's easy to spin your wheels pounding at the keyboard, but a focus on <em>process</em> will make you orders of magnitude more effective.",
    icon: 'fa-table',
    url: "http://www.meetup.com/Mid-Michigan-Agile-Group/",
    on: '4th Tuesday'
  },
  # 4th Thursday
  {
    name: 'Interaction Design',
    desc: "The most significant challenges in product development often lie in the space between the backend and the user.",
    icon: 'fa-users',
    url: 'http://www.meetup.com/IxDA-Lansing/',
    on: '4th Thursday'
  }
  # Perhaps Expired
  # {
  #   name: 'Big Data',
  #   desc: "There's a <em>lot</em> of great data out there. Now to figure out what to do with it.",
  #   icon: 'icon-hadoop',
  #   url: 'http://www.meetup.com/Lansing-Hadoop-Users-Group-Meetup/'
  # }
]

helpers do
  def meetups
    MEETUPS
  end
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
