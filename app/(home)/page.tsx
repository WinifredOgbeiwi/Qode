import React from 'react'
import Hero from '../component/home/Hero'
import Feature1 from '../component/home/Feature1'
import Feature2 from '../component/home/Feature2'
import Feature3 from '../component/home/Feature3'

const HomePage = () => {
  return (
    <section className='pt-20'>
      <Hero/>
      <Feature1/>
      <Feature2/>
         <Feature3/>
    </section>
  )
}

export default HomePage