import meetups from './meetups'
import beginnerResources from './beginner-resources'

const keywordifyByAttribute = (list, attribute) => {
  return list
    .map(item => item[attribute].toLowerCase())
    .join(',')
}

export default [
  keywordifyByAttribute(meetups, 'name'),
  keywordifyByAttribute(beginnerResources, 'title')
].join(',')
