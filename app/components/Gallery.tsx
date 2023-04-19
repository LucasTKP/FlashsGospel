'use client';

import Image from "next/image"
import { urlFor } from '@/lib/sanity'

import { useState } from "react";

export default function Gallery({props}: any) {
  const [indexActive, setIndexActive] = useState(0)
  const galleryData = props

  return (
    <div className="container mx-auto mt-10 px-4" id="gallery">
      <div className="bg-yellow-500 h-[300px] rounded-lg flex items-center justify-center outline-4 outline-[#F3F3F3] outline outline-offset-[-40px] max-sm:h-[220px]">
        <h3 className="text-[60px] font-castoro text-white max-sm:text-[40px] max-xs:text-[35px]">Galeria</h3>
      </div>
      <div className="mt-10">
        {galleryData[0] ? galleryData.map((post: any, index: number) => {
          return (
            <div key={index}>
               <div className="flex gap-5 items-center px-20 my-6">
               <Image src={urlFor(post.imagens[0]).url()} alt="Gallery images" width={281} height={500} className={`aspect-[9/16] ${index == indexActive ? 'w-full ' : 'min-w-[200px] h-[180px]'} rounded-sm object-none `} />
               <div>
                  <h3 className="text-[24px] font-medium my-2">{post.titulo}</h3>
                  <p className="text-[18px]">{index == indexActive  ? post.texto : post.texto.substring(0, 400)}... <button className={`text-yellow-500 font-medium underline ${index == indexActive ? 'hidden' : ''}`} onClick={() => setIndexActive(index)}>Ver mais</button></p>
                </div>
              </div>

              {index == indexActive  ? 
                <div className="flex mt-10 gap-10 overflow-x-scroll justify-center">
                  {galleryData[index].imagens.map((image: any, index: number) => {
                    return <Image key={index} src={urlFor(image).url()} alt="Patrocinadores" width={250} height={250} className="border-2 border-yellow-500 rounded-sm max-sm:w-[200px] max-sm:h-[150px]"></Image>
                  })}
                </div> 
              : ''}
            </div>
          )
        }) : ''}
      </div>
    </div>
  )
}
