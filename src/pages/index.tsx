import React from 'react'
import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('components/organisms/Home'), {
  ssr: false // disable ssr so we can use suspense
})

export default function Home() {
  return <HomePage />
}
