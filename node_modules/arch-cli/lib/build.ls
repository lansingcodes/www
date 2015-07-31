require! 'child_process'

module.exports = ->
  compiler = child_process.spawn 'npm', ['run-script', 'build']
  [compiler.stdout, compiler.stderr] |> each ->
    it.set-encoding 'utf8'
    it.on 'data' console.log