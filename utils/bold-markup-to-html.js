/*
 * Replace pairs of "**" with opening and closing span tags
 * ... to give text between the pairs a bold style.
 * @param {string} markdown - input markdown string
 * @returns {string}
 */
export default markdown => {
  const markdownMatches = [...markdown.matchAll(/\*\*/g)]
  while (markdownMatches[0] && markdownMatches[1]) {
    markdown = markdown.replace('**', '<span class="font-bold">')
    markdown = markdown.replace('**', '</span>')
    markdownMatches.shift()
    markdownMatches.shift()
  }
  return markdown
}
