module.exports =
  initializing:
    main: ->
      @context = {}

  prompting: {}

  configuring:
    main: ->
      @destination-root @context.answers.dir
      @package.name = @context.answers.name if @context.answers.name

  writing:
    main: ->
      @fs.copy @template-path('_.gitignore'), @destination-path('.gitignore')
      if @context.answers.language == 'ls'
      then @fs.copy @template-path('app-ls/**/*'), @destination-path('app')
      else @fs.copy @template-path('app-es6/**/*'), @destination-path('app')

  end:
    install: ->
      unless @options['skip-install']
        @npm-install!

    main: ->
      @config.save!
      console.log 'Your Arch app has been generated! Use \'arch-cli s\'  to run it.'
