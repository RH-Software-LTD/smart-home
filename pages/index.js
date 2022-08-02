import Head from 'next/head';
import React from 'react'
import Navbar from '../components/Header/Navbar'
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
      <div className="bg-regal-blue absolute z-[-1] w-full h-[900px]"></div>
      <Head>
        <title>App Landing | A mobile app landing page</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#1E5AFA" />
      </Head>
      <div className="w-4/5">
        <Navbar />
        <Hero />
        <About />
        <OurClients />
        <Testimonial />
        <Faqs />
        <DownloadCTA />
        <Cta />
        <Footer />
      </div>
      <Copyright />
    </div>
  )
}

export default Home