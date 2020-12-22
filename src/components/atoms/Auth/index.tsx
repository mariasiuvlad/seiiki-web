import React, {useState} from 'react'

export default function Auth({onSubmit}) {
  const [password, setPassword] = useState('')

  return (
    <div className="fullscreen flex-col justify-center items-center">
      <input
        className="bg-transparent border mb-4 p-2 focus:outline-none"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => onSubmit(password)}>Login</button>
    </div>
  )
}
