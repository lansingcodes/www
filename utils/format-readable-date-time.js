import { format } from 'date-fns'

export default time => format(time, 'dddd, MMMM d \'at\' h:mm aa')
