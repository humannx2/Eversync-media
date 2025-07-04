import About from '@/components/home/About'
import HeroSection from '@/components/home/Hero'
import Portfolio from '@/components/home/Portfolio'
import OurMission from '@/components/home/ourmission'
import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <OurMission/>
      <Portfolio />
    </>
  )
}
