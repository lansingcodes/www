import boldMarkdownToHTML from './bold-markdown-to-html'

export default description => {
  // Trim whitespace
  let newDescription = description.trim()
  // Remove elipsis at end of description
  newDescription = newDescription.replace(/\.\.\./g, '')
  // Remove emoji from description
  // https://stackoverflow.com/questions/10992921/how-to-remove-emoji-code-using-javascript
  newDescription = newDescription.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF])/g,
    ''
  )
  // If the description contains any '.', remove all text after the last '.'
  newDescription = newDescription.replace(/\.(?=[^.]*$)(.*)/g, '')
  // If the description contains ---, remove the --- and all subsequent text, then trim the text again
  newDescription = newDescription.replace(/(---)(.*)/g, '')
  // Trim whitespace
  newDescription = newDescription.trim()
  // Replace bold markdown with proper Tailwind markup
  newDescription = boldMarkdownToHTML(newDescription)
  // Re-add the trailing ... characters
  newDescription = newDescription.concat('...')
  return newDescription
}
