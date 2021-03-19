import db from 'lib/db'
import {List, PostSingle, PostRecurring} from 'lib/db/schedule'
import {DateTime} from 'luxon'

interface Task {
  uuid: string
  cron: string
  command: string
}

async function get(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const {rows} = await db.query(List)
  res.end(JSON.stringify(rows))
}

async function post(req, res) {
  try {
    const {
      body: {cron, command, timestamp}
    } = req
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    console.log('@timestamp', timestamp)

    timestamp
      ? await db.query<Task>(PostSingle, [DateTime.fromISO(timestamp).toJSDate(), command])
      : await db.query<Task>(PostRecurring, [cron, command])
    res.end()
  } catch (error) {
    res.statusCode = 400
    res.end(error.message)
  }
}

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': // list all tasks
      return get(req, res)
    case 'POST': // create task
      return post(req, res)
    default:
      res.statusCode = 404
      res.end()
  }
}
