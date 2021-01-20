import {scheduleJob} from 'node-schedule'

import * as HeatingAgent from 'lib/api/heatingAgent'
import db from 'lib/db'
import {List, Post} from 'lib/db/schedule'

interface Task {
  uuid: string
  cron: string
  command: string
}

const commandMap = {
  on: async () => {
    console.log('[Task::Heating On] Executing...')
    try {
      await HeatingAgent.turnOn()
    } catch (error) {
      console.log('[Task::Heating On] Failed with error', error.message)
    }
  },
  off: async () => {
    console.log('[Task::Heating Off] Executing...')
    try {
      await HeatingAgent.turnOff()
    } catch (error) {
      console.log('[Task::Heating Off] Failed with error', error.message)
    }
  }
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
      body: {cron, command}
    } = req
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const result = await db.query<Task>(Post, [cron, command])
    const task = result.rows[0]
    scheduleJob(task.uuid, cron, commandMap[command])
    res.end(JSON.stringify(task))
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
