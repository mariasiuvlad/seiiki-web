export const PostRecurring = `
  INSERT INTO schedule(cron, command)
  VALUES($1, $2)
  RETURNING *
`

export const PostSingle = `
  INSERT INTO schedule(timestamp, command)
  VALUES($1, $2)
  RETURNING *
`

export const List = `
  SELECT * FROM schedule
`

export const Delete = `
  DELETE FROM schedule WHERE uuid = $1
`
