global import require 'prelude-ls'

pkg = require './package.json'
cli = require 'commander'
commands = require './cli/commands.ls'

cli
  .version pkg.version

commands |> each -> it cli

cli.parse process.argv