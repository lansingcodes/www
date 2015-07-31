require! {
  'yeoman-environment': yo
  path
}

module.exports = init = (name, opts) ->
  env = yo.create-env!
  env.register 'generator-arch'
  env.run 'arch', do
    dir: opts.dir
    name: (name |> join ' ')
