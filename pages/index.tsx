import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='bg-blue-600'>
    <Header />
    <Hero />
    </div>
  )
}

export default Home
