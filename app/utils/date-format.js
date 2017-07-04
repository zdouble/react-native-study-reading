import moment from 'moment'
import 'moment/locale/zh-cn'

const dateFormat = (date) => moment(date).fromNow()

export default dateFormat
