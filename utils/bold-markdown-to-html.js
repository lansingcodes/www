/*
 * Replace '**' markdown tags with <span> HTML markup tags
 * .. to give text a bold style.
 * E.g '**text** **welcome' becomes:
 * .. '<span class="font-bold">text</span> <span class="font-bold">welcome</span>'
 *
 * @param {string} markdown - input markdown string
 * @returns {string}
 */
export default (markdown) => {
  const HTMLOpeningSpan = '<span class="font-bold">'
  const HTMLEndingSpan = '</span>'
  const markdownMatches = [...markdown.matchAll(/\*\*/g)]
  while (markdownMatches[0] && markdownMatches[1]) {
    markdown = markdown.replace('**', HTMLOpeningSpan)
    markdown = markdown.replace('**', HTMLEndingSpan)
    markdownMatches.shift()
    markdownMatches.shift()
  }
  // If an ending markdown tag was lost during truncation
  // .. within clean-event-description (or forgotten when authoring the description),
  // .. ensure text that follows the opening double-asterisk is bold.
  if (markdownMatches[0]) {
    // If there is no text to make bold after the opening '**'
    if (markdown.endsWith('**')) {
      markdown = markdown.replace('**', '')
    } else {
      markdown = markdown.replace('**', HTMLOpeningSpan)
      markdown = markdown + HTMLEndingSpan
    }
  }
  return markdown
}
