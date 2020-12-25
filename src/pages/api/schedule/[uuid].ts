import db from 'lib/db'
import {Delete} from 'lib/db/schedule'
import {scheduledJobs} from 'node-schedule'

// delete task
export default async function handler(req, res) {
  await db.query(Delete, [req.query.uuid])
  scheduledJobs[req.query.uuid] && scheduledJobs[req.query.uuid].cancel()
  res.statusCode = 200
  res.end()
}
