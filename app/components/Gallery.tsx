'use client';

import Image from "next/image"
import { urlFor } from '@/lib/sanity'

import { useState } from "react";

export default function Gallery({props}: any) {
  const [indexActive, setIndexActive] = useState(0)
  const [indexImage, setIndexImage] = useState(0)
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
               <div className="flex gap-10 items-center px-20 my-6 justify-center">
                <Image src={urlFor(post.imagens[indexActive == index ? indexImage : 0]).url()} alt="Gallery images" width={200} height={500} className={`${index == indexActive ? 'w-[300px]' : 'object-none'} aspect-square rounded-sm`}></Image>
                <div className={`${index == indexActive ? 'max-w-[600px]' : 'w-full'}`}>
                  <h3 className={`text-[30px] inline-flex font-medium relative my-2 ${index == indexActive ? ' before:bg-yellow-500/30 before:w-full before:h-[20px] before:absolute before:bottom-0 before:rounded-md' : ''}`}>{post.titulo}</h3>
                  <p className="text-[18px] max-h-[300px] whitespace-pre-wrap overflow-y-scroll">{index == indexActive ? post.texto : post.texto.substring(0, 400)}... <button className={`text-yellow-500 font-medium underline ${index == indexActive ? 'hidden' : ''}`} onClick={() => {
                    setIndexActive(index)
                    setIndexImage(0)
                  }}>Ver mais</button></p>
                </div>
              </div>

              {/* {index == indexActive  ? 
                <div className="flex mt-10 gap-10 overflow-x-scroll justify-center">
                  {galleryData[index].imagens.map((image: any, index: number) => {
                    console.log(image)
                    return image ? <Image key={index} src={urlFor(image).url()} onClick={() => setIndexImage(index)} alt="Patrocinadores" width={180} height={180} className="border-2 border-yellow-500 rounded-sm max-sm:w-[200px] aspect-square object-cover" /> : <></>
                  })}
                </div> 
              : ''} */}
            </div>
          )
        }) : ''}
      </div>
    </div>
  )
}
