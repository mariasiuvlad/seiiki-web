import db from 'lib/db'
import * as reading from 'lib/db/reading'

/** @TODO extract db related code */
export default async function handler(req, res) {
  const {rows: data, rowCount} = await db.query(reading.Latest)

  if (rowCount === 0) {
    res.statusCode = 204
    return res.end()
  }

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data[0]))
}
