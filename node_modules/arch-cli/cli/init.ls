require! '../lib/init.ls'

module.exports = ->
  it
    .command 'init [name...]'
    .description 'Initialise an Arch application.'
    .alias 'i'
    .option '-d, --dir <directory>', 'Directory to generate the app in - defaults to app-name or current directory.'
    .action init
    .on '--help', ->
      console.log 'TODO: This help text'
