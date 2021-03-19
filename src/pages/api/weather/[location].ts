import httpClient from 'lib/api'

export default async function handler(req, res) {
  try {
    const {query} = req
    const {location, ...options} = query
    const weather = await httpClient(
      `https://api.darksky.net/forecast/${
        process.env.DARKSKY_API_KEY
      }/${location}?${new URLSearchParams(options).toString()}`
    )

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(weather))
  } catch (error) {
    res.statusCode = 503
    res.setHeader('Content-Type', 'application/json')
    res.end()
  }
}
