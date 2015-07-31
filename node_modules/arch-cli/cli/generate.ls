require! '../lib/generate.ls'

module.exports = ->
  it
    .command 'generate <type> [args...]'
    .description 'Generate something in an existing Arch app.'
    .alias 'g'
    .action generate
    .on '--help', ->
      console.log 'TODO: This help text...'
