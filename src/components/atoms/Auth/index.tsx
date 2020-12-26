import React, {useState} from 'react'
import Card from 'components/atoms/Card'
import Button from '../Button'

export default function Auth({onSubmit}) {
  const [password, setPassword] = useState('')

  return (
    <div className="fullscreen flex-col justify-center items-center">
      <Card className="p-8">
        <input
          placeholder="password"
          className="bg-transparent border mb-4 p-2 focus:outline-none"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button primary label="Login" onClick={() => onSubmit(password)} />
      </Card>
    </div>
  )
}
