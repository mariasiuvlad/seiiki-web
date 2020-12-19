import {Client} from 'pg'

const POST_READING =
  'INSERT INTO reading(sensor_id, time, temp, humi) VALUES($1, $2, $3, $4) RETURNING *'

  /** @TODO extract db related code */
export default async function handler(req, res) {
  const client = new Client()
  await client.connect()

  if (req.method !== 'POST') {
    res.statusCode = 404
    return res.end('Not found')
  }

  try {
    const {temp, humi, id} = req.body
    await client.query(POST_READING, [id, new Date(), temp, humi])

    res.statusCode = 201
    res.end()
  } catch (error) {
    res.statusCode = 400
    res.end(error.message)
  }
}
