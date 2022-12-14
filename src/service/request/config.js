let BASE_URL = ''
const TIME_OUT = 10000

// http://152.136.185.210:5000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://192.168.5.18:10060/api/prod'
} else {
  BASE_URL = ' http://192.168.5.18:10060/api/test'
}

export { BASE_URL, TIME_OUT }
