import Head from 'next/head';
import React from 'react'
import Navbar from '../components/Header/Navbar'
import Decors from '../components/Decors';
import Hero from '../components/Header/Hero'
import About from '../components/About/About'
import OurClients from '../components/Clients/OurClients'
import Testimonial from '../components/Testimonial/Testimonial';
import Faqs from '../components/Faq/Faqs';
import DownloadCTA from '../components/Download/DownloadCTA';
import Cta from '../components/Cta/Cta';
import Footer from '../components/Footer/Footer';
import Copyright from '../components/Footer/Copyright';


const Home = () => {
  return (
    <div className="flex min-h-screen mx-auto flex-col items-center justify-flex-start">
      <div className="bg-regal-blue absolute z-[-1] w-full h-[850px]"></div>
      <Head>
        <title>Smart Solutions</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#1E5AFA" />
      </Head>
      <Decors />
      <Navbar />
      <Hero />
      <About />
      <OurClients />
      <Testimonial />
      <Faqs />
      <DownloadCTA />
      <Cta />
      <Footer />
      <Copyright />
    </div>
  )
}

export default Home