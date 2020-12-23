import React, {useState} from 'react'
import {Resize} from 'icons'

export default function useCollapsible(
  initialValue: boolean
): [boolean, React.FC<{className?: string}>] {
  const [collapsed, setCollapsed] = useState(initialValue)

  const Control = ({className}) => (
    <button aria-label="Collapse" className={className} onClick={() => setCollapsed((c) => !c)}>
      <Resize className="w-4 h-4" />
    </button>
  )

  return [collapsed, Control]
}
