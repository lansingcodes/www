// map our commands to the classList methods
const fnmap = {
  toggle: 'toggle',
  show: 'add',
  hide: 'remove'
}

const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector))
  targets.forEach(target => {
    target.classList[fnmap[cmd]]('show')
  })
}