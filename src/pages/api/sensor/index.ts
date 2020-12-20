import db from 'lib/db'
import * as reading from 'lib/db/reading'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 404
    return res.end('Not found')
  }

  try {
    const {temp, humi, id} = req.body
    await db.query(reading.Post, [id, new Date(), temp, humi])

    res.statusCode = 201
    res.end()
  } catch (error) {
    res.statusCode = 400
    res.end(error.message)
  }
}
