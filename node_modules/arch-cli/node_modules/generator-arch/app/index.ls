require!{
  fs
  path
  'yeoman-generator': {generators}
  chalk
  yosay
}

{each, obj-to-pairs} = require 'prelude-ls'

parts = fs.readdir-sync path.resolve __dirname + '/parts'

generator = {}

parts |> each ->
  part = require "./parts/#it"
  part |> obj-to-pairs |> each ([key, value]) ->
    if generator[key]
      part[key] |> obj-to-pairs |> each ([pkey, pval]) ->
        generator[key][pkey] = pval
    else
      generator[key] = part[key]

module.exports = generators.Base.extend generator
