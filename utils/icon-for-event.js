import meetups from '~/config/meetups'

export default event => {
  const meetup = meetups.find(meetup => {
    return meetup.meetupSlug === event.relationships.group.attributes.slug
  })
  if (meetup) {
    const { iconSet, iconName, iconText } = meetup
    return { iconSet, iconName, iconText }
  }
}
