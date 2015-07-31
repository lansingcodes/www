require! {
  fs
  path
  child_process
  'is-running'
  'node-watch': watch
  './build.ls'
}


server = null

default-opts =
  daemonise: false
  log: false
  pidfile: null
  port: 3000
  standalone: false
  watch: false


clean-pidfile = (opts, cb) ->
  pidfile = get-pidfile opts
  fs.unlink pidfile, (err) ->
    throw err if err
    cb! if cb

get-pidfile = (opts) ->
  return opts.pidfile or (path.resolve "./server-#{opts.port or 3000}.pid")

init = (opts) ->
  if opts.watch and opts.daemonise
    return console.error "You can't enable a watcher when running in daemon mode."
  start-server opts

  if opts.watch
    watch-server opts

start-server = (opts) ->
  arch-path = path.dirname path.resolve './node_modules/arch/package.json'
  arch-pkg = require path.join arch-path, 'package.json'
  arch-server-binary = path.join arch-path, arch-pkg.bin['arch-server']

  s-opts =
    env: process.env import do
      ARCH_PORT: opts.port or process.env.ARCH_PORT or undefined
    detached: opts.daemonise
    stdio: if opts.daemonise => (if opts.log => ['ignore', (fs.open-sync opts.log, 'a'), (fs.open-sync opts.log, 'a')] else 'ignore') else 'pipe'

  if opts.standalone
    server := child_process.spawn 'npm', ['start'], s-opts
  else
    server := child_process.spawn 'node', [arch-server-binary], s-opts

  if opts.daemonise
    server.unref!
  else
    [server.stdout, server.stderr] |> each ->
      it.set-encoding 'utf8'
      it.on 'data' !->
        console.log it.trim!
        if opts.log
          fs.append-file opts.log, "#it\n", (err) ->
            console.error err if err

  fs.write-file (get-pidfile opts), server.pid, (err) -> throw err if err

stop-server = (opts) ->
  server.kill!

restart-server = (opts) ->
  server.on 'exit', ->
    start-server opts
  stop-server opts

watch-server = (opts) ->
  watch ['app'], (file) ->
    build!
    switch (file |> split \. |> last)
      | \ls => restart-server opts
      | \js => restart-server opts

module.exports = serve = (opts) ->
  opts = ({} import default-opts) import opts
  pidfile = get-pidfile opts
  fs.exists pidfile, (exists) ->
    if exists
      fs.read-file pidfile, encoding: 'utf8', (err, pid) ->
        if is-running +pid
          console.log "Server already running on port #{opts.port or 3000} (pid #pid)"
        else
          clean-pidfile opts, ->
            init opts
    else
      init opts
