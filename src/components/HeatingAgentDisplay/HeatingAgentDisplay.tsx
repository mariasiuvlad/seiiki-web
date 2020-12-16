import React, {useMemo} from 'react'

export default function HeatingAgentDisplay({heating, onToggle}) {
  const label = useMemo(() => (heating?.state ? 'Turn Off' : 'Turn On'), [heating])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl tracking-tight font-sans p-4">
        Heating is {heating?.state ? 'On' : 'Off'} at this time
      </h1>
      <button
        className="py-2 px-4 bg-blue-400 text-white border-b-4 border-blue-600"
        onClick={onToggle}>
        {label}
      </button>
    </div>
  )
}
