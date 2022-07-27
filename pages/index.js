import Head from 'next/head';
import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items- justify-flex-start">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home