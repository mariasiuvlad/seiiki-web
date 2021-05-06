import db from 'lib/db'
import {CheckLogin} from 'lib/db/schedule'

export default async function handler(req, res) {
  try {
    const {
      body: {username, password}
    } = req
    const {rows} = await db.query(CheckLogin, [username])
    if (rows.length == 0) {
      res.statusCode = 404
      res.end("You don't exist")
    }

    const user = rows[0]

    // @TODO check password is correct

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(user))
  } catch (error) {
    console.log(error)
    res.statusCode = 404
    res.end()
  }
}
