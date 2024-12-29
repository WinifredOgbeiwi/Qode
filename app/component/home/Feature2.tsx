import { IMAGES } from '@/app/utils/imports'
import Image from 'next/image'
import React from 'react'

const Feature2 = () => {
  return (
    <div className="text-lg px-8 md:px-32 py-10  border-t-4 border-black  bg-[#FFC8EB] ">
        <div className='my-24 flex justify-between items-center'>
<Image src={IMAGES.ImageHolder} alt='Image Holder' className='border-4 border-black rounded-2xl w-1/3'/>
        <p className='w-[40%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia minima natus quibusdam praesentium enim obcaecati facilis, blanditiis, deleniti sunt temporibus adipisci officiis assumenda ad. Saepe quibusdam quidem sed esse nam excepturi soluta vero, voluptate sit perspiciatis dolor aspernatur at. Voluptatibus magni eveniet saepe dolores soluta inventore rerum odit magnam?
        </p>
        
        </div>
        
    </div>
  )
}

export default Feature2