import db from 'lib/db'
import {Delete} from 'lib/db/schedule'

// delete task
export default async function handler(req, res) {
  await db.query(Delete, [req.query.uuid])
  res.statusCode = 200
  res.end()
}
