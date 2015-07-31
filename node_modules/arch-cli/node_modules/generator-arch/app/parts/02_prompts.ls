module.exports =
  prompting:
    main: ->
      done = @async!
      prompts = []

      unless @options.name => prompts.push do
        name: 'name'
        message: 'Project name'
        default: @appname.replace ' ', '-'

      unless @options.dir => prompts.push do
        name: 'dir'
        message: 'Project directory'
        default: @options.dir or '.'

      unless @options.language => prompts.push do
        name: 'language'
        message: 'Scaffold app as LiveScript or ES6'
        default: @options.language or 'ls'

      @prompt prompts, (answers) ~>
        @context = @context import answers: answers
        done!
