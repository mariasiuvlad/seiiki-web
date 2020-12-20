import React, {useState} from 'react'
import {CaretDown, CaretUp} from 'icons'

export default function useCollapsible(
  initialValue: boolean
): [boolean, React.FC<{className?: string}>] {
  const [collapsed, setCollapsed] = useState(initialValue)

  const Button = ({className}) => (
    <button className={className} onClick={() => setCollapsed((c) => !c)}>
      {collapsed ? (
        <CaretUp className="w-4 h-4" />
      ) : (
        <CaretDown className="w-4 h-4" />
      )}
    </button>
  )

  return [collapsed, Button]
}
