import {useRef, useEffect} from 'react'

const useAutofocus = () => {
  const ref = useRef(null)
  useEffect(() => ref?.current.focus(), [ref])

  return (e) => (ref.current = e)
}

export default useAutofocus
