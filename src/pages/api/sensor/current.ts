import {Client} from 'pg'

/** @TODO extract db related code */
export default async function handler(req, res) {
  const client = new Client()
  await client.connect()

  const {rows: data, rowCount} = await client.query(
    'SELECT * FROM reading ORDER BY time DESC LIMIT 1'
  )

  if (rowCount === 0) {
    res.statusCode = 204
    return res.end()
  }

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data[0]))
}
