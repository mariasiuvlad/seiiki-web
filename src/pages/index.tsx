import Head from 'next/head'
import Hero from '../components/atoms/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero text="NextJS Boilerplate" />
    </>
  )
}
