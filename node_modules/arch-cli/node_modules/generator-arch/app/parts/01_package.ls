module.exports =
  initializing:
    package: ->
      @package = @fs.readJSON @template-path('_package.json')
      @package = @package import do
        name: @options.name

  writing:
    package: ->
      @fs.write @destination-path('package.json'), JSON.stringify(@package, null, 2)
