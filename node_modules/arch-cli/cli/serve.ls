require! '../lib/serve.ls'

module.exports = ->
  it
    .command 'serve'
    .description 'Start your app\'s server'
    .alias 's'
    .option '-d, --daemonise', 'Run as a background process'
    .option '-i, --pidfile <pidfile>', 'Specify a pidfile to use.'
    .option '-l, --log <file>', 'Specify a file to log to.'
    .option '-p, --port <port>', 'Specify a server port (sets the ARCH_PORT environment variable)'
    .option '-s, --standalone', "Run in standalone mode, without Arch's server.js."
    .action serve
    .on '--help', ->
      console.log 'TODO: This help text'
