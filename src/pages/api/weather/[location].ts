import httpClient from 'lib/api'
import cache from 'memory-cache'

export default async function handler(req, res) {
  try {
    const {query} = req
    const {location, ...options} = query

    const key = JSON.stringify({location, options})

    const cachedData = cache.get(key)
    if (cachedData) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(cachedData)
      return
    }

    const weather = await httpClient(
      `https://api.darksky.net/forecast/${
        process.env.DARKSKY_API_KEY
      }/${location}?${new URLSearchParams(options).toString()}`
    )

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    cache.put(key, JSON.stringify(weather), 60 * 1000 * 15)
    res.end(JSON.stringify(weather))
  } catch (error) {
    res.statusCode = 503
    res.setHeader('Content-Type', 'application/json')
    res.end()
  }
}
