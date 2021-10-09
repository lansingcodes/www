export default description => {
  // Trim whitespace
  let nDescription = description.trim()
  // Remove elipsis at end of description
  nDescription =
    nDescription
      .split('')
      .reverse()
      .splice(0, 3)
      .join('') === '...'
      ? description
          .split('')
          .reverse()
          .splice(3, description.length)
          .reverse()
          .join('')
      : description
  // Remove emoji from description
  nDescription.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF])/g,
    ''
  )
  // If the description contains any '.', remove all text after the last '.'
  const lastPeriodIndex = nDescription
    .split('')
    .reverse()
    .join('')
    .indexOf('.')
  nDescription =
    lastPeriodIndex !== -1
      ? nDescription
          .split('')
          .splice(0, nDescription.length - lastPeriodIndex)
          .join('')
      : nDescription
  // If the description contains ---, remove the --- and all subsequent text, then trim the text again
  nDescription =
    nDescription.indexOf('---') !== -1
      ? nDescription
          .split('')
          .splice(0, nDescription.indexOf('---'))
          .join('')
      : nDescription
  // Trim whitespace
  nDescription = nDescription.trim()
  // Re-add the trailing ... characters
  nDescription =
    nDescription[nDescription.length - 1] !== '.'
      ? `${nDescription}...`
      : nDescription
  return nDescription
}
