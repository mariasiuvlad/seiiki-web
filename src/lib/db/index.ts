import {Pool} from 'pg'

const pool = new Pool()

export default {
  query: <T>(...args: [queryStream: any, values?: any]) => pool.query<T, any>(...args)
}
