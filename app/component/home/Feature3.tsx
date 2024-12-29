import { IMAGES } from '@/app/utils/imports'
import Image from 'next/image'
import React from 'react'

const Feature3= () => {
  return (
    <div className="text-xl px-8 md:px-32 py-10 border-t-4 border-black  bg-[#9f77fd] ">
        <div className=' md:my-24 flex flex-col md:flex-row justify-between items-center'>
<Image src={IMAGES.ImageHolder} alt='Image Holder' className='border-4 border-black rounded-2xl w-2/3 md:w-1/3'/>
        
            <div className='md:w-[40%] mt-10 md:mt-0'>
                <h2 className='text-6xl font-bold'>Climb the Leaderboard!</h2>
                         <p className='my-4'>
                Think you&#39;re a tech genius? Prove it! Our leaderboard showcases the top scorers from around the world, so you can see how you stack up against the best. 
               <p className='mt-4'>Whether you&#39;re aiming for the <span className='text-3xl font-bold'>#1</span> spot or just want to beat your own record, the challenge is on! Compete, improve, and maybe even surprise yourself!</p> 
                        </p>
            </div>
        
        </div>
        
    </div>
  )
}

export default Feature3