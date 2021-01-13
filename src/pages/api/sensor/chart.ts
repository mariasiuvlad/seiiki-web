import db from 'lib/db'
import * as reading from 'lib/db/reading'

export default async function handler(req, res) {
  const {interval} = req.query

  try {
    const {rows: data, rowCount} = await db.query(reading.Chart, [interval / 12, interval])

    if (rowCount === 0) {
      res.statusCode = 204
      return res.end()
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } catch (error) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end()
  }
}
