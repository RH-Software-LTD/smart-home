import Head from 'next/head';
import React from 'react'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import About from '../components/About/About'
import OurClients from '../components/Clients/OurClients'
import Testimonial from '../components/Testimonial/Testimonial';


const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-flex-start">
      <div className="bg-regal-blue absolute z-[-1] w-full h-[900px]"></div>
      <Head>
        <title>App Landing | A mobile app landing page</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#1E5AFA" />
      </Head>
      <Navbar/>
      <Hero/>
      <About/>
      <OurClients/>
      <Testimonial/>
    </div>
  )
}

export default Home