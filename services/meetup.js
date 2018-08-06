const fetch = require('./qccoders-fetch')
const {MEETUP_ENDPOINT, DEFAULT_NAME} = process.env

const formatCommands = (commands) => {
  let stringList = ''

  Object.values(commands).forEach(val => {
    return stringList += `\`${val.name}: ${val.desc}\` \n`
  })
  console.log(stringList)
  return stringList
}

const formatRSVPMessage = (meetupInfo) => {
  return `Currently, there are ${meetupInfo.next_event.yes_rsvp_count} people going.`
}

const parseInfo = (meetupJSON) => {
  const message = formatRSVPMessage(meetupJSON)
  const nextMeetupLink = `${meetupJSON.link}events/${meetupJSON.next_event.id}`

  return {message, nextMeetupLink}
}

const getNextMeetup = (groupname=DEFAULT_NAME) => {
    return fetch(`${MEETUP_ENDPOINT}${groupname}`)
    .then(parseInfo)
    .catch(err => err)
}

module.exports.getNextMeetup = getNextMeetup
module.exports.formatCommands = formatCommands