export default function truncate(string, maxLength = 30) {
  string = string.trim()
  return string.length > maxLength
    ? string.slice(0, maxLength).trim() + '...'
    : string
}
