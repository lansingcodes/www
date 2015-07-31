require! <[
  ./init.ls
  ./install.ls
  ./generate.ls
  ./serve.ls
]>

commands = [init, install, generate, serve]

module.exports = commands