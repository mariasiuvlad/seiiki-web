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

export const Chart = `
  SELECT time_bucket(INTERVAL '1 hour' * $1, time) AS timestamp,
    sensor_id, COUNT(*),
    ROUND(AVG(temp)::numeric,2) AS temp,
    ROUND(AVG(humi)::numeric,2) AS humi
  FROM reading
  WHERE time > NOW() - INTERVAL '1 hours' * $2
  GROUP BY timestamp, sensor_id
  ORDER BY timestamp ASC, temp DESC;
`