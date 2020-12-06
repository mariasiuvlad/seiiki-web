import * as HeatingAgent from 'lib/api/heatingAgent'

export default async function handler(req, res) {
  const {data} = await HeatingAgent.turnOff()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}
