export const Post = `
  INSERT INTO reading(sensor_id, time, temp, humi)
  VALUES($1, $2, $3, $4)
  RETURNING *
`

export const Latest = `
  SELECT * FROM reading
  ORDER BY time DESC
  LIMIT 1
`

export const Last24Hours = `
  SELECT * FROM public.reading
  WHERE time >= NOW() - INTERVAL '4 HOURS'
  ORDER BY time ASC
`
