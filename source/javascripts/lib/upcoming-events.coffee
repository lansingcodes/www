KEY = '6769112e6b713232123387044135e14'

abbreviationOf = (urlname) ->
  {
    'Mid-Michigan-Agile-Group' : 'Agile'
    'Lansing-DevOps-Meetup' : 'DevOps'
    'Lansing-Ruby-Meetup-Group' : 'Ruby'
    'Lansing-Javascript-Meetup' : 'JavaScript'
    'lansingweb' : 'Web'
    'GLUGnet' : '.NET'
    'PMI-Capital-Area-Chapter-Lunch-and-Learn' : 'Project Management'
    'MoMoLansing' : 'Mobile'
  }[urlname]

class UpcomingEvents extends React.Component

  constructor: ->
    @state =
      events: []

  componentWillMount: ->
    events = []
    $.getJSON("http://damp-sands-7926.herokuapp.com/api/v1/events/upcoming/list").done (events) =>
      @setState events: events

  render: ->
    if @state.events.length > 0
      <table style={ textAlign: 'left', margin: '20px auto 0' }>
        <tbody>
          {
            for event in @state.events
              <tr>
                <td style={ padding: '5px 20px 5px 0' }>
                  { moment(event.time).fromNow() }
                </td>
                <td style={ padding: '5px 20px 5px 0' }>
                  <a
                    style={ color: 'white' }
                    href={ event.event_url }
                  >
                    { "#{event.name} (#{ abbreviationOf(event.group.urlname) or event.group.name })" }
                  </a>
                </td>
              </tr>
            }
        </tbody>
      </table>
    else
      <p>Loading...</p>

React.render <UpcomingEvents/>, document.getElementById('upcoming-events')
