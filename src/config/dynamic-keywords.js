import meetups from './meetups'
import beginnerResources from './beginner-resources'
import membershipOrganizations from './membership-organizations'

const keywordifyByAttribute = (list, attribute) => {
  return list
    .map(item => item[attribute].toLowerCase())
    .join(',')
}

export default [
  keywordifyByAttribute(meetups, 'name'),
  keywordifyByAttribute(beginnerResources, 'title'),
  keywordifyByAttribute(membershipOrganizations, 'title')
].join(',')
