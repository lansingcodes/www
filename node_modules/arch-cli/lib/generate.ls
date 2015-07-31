module.exports = generate = (type, args) ->
  console.log 'Generating a %s, arguments: %s', type, (args |> join ', ')