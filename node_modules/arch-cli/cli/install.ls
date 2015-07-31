require! '../lib/install.ls'

module.exports = ->
  it
    .command 'install <module>'
    .description 'Install a Arch module.'
    .alias 'in'
    .action install
    .on '--help', ->
      console.log 'TODO: This help text...'
