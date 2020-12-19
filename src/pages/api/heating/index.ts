import * as HeatingAgent from 'lib/api/heatingAgent'

export default async function handler(req, res) {
  try {
    const {data} = await HeatingAgent.status()
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } catch (error) {
    res.statusCode = 404
    res.end()
  }
}
