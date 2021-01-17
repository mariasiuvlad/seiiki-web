import db from 'lib/db'
import * as reading from 'lib/db/reading'

export default async function handler(req, res) {
  try {
    const {rows: data, rowCount} = await db.query(reading.Sensors)

    if (rowCount === 0) {
      res.statusCode = 204
      return res.end()
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data.map(({sensor_id}) => sensor_id)))
  } catch (error) {
    res.statusCode = 503
    res.setHeader('Content-Type', 'application/json')
    res.end()
  }
}
