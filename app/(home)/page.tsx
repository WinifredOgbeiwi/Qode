import React from 'react'
import Hero from '../component/home/Hero'
import Feature1 from '../component/home/Feature1'
import Feature2 from '../component/home/Feature2'
import Feature3 from '../component/home/Feature3'
import Feature4 from '../component/home/Feature4'

const HomePage = () => {
  return (
    <section className='pt-20'>
      <Hero/>
      <Feature1/>
      <Feature2/>
         <Feature3/>
         <Feature4/>
    </section>
  )
}

export default HomePage