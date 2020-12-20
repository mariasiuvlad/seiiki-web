import {Pool} from 'pg'

const pool = new Pool()

export default {
  query: (...args: [queryStream: any, values?: any]) => pool.query(...args)
}
