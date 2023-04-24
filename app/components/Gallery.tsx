'use client'

import Image from "next/image"
import { urlFor } from '@/lib/sanity'

export default function Gallery({props}: any) {
  const galleryData = props

  return (
    <div className="container mx-auto mt-10 px-4" id="gallery">
      <div className="bg-yellow-500 h-[300px] rounded-lg flex items-center justify-center outline-4 outline-[#F3F3F3] outline outline-offset-[-40px] max-sm:h-[220px]">
        <h2 className="text-[60px] font-castoro text-white max-sm:text-[40px] max-xs:text-[35px]">Galeria</h2>
      </div>
      <h3 className="my-10 text-[24px] before:w-[30px] before:h-[6px] before:bg-yellow-500 before:inline-block before:mr-4 before:rounded-full items-center flex">Veja os nossos principais trabalhos.</h3>
      <p className="text-[24px] max-w-[800px] text-center mx-auto"><span className="font-castoro text-[40px] relative before:bg-yellow-500/30 before:w-full before:h-[20px] before:absolute before:bottom-0 before:rounded-md mr-2">Explore</span>cada um dos albuns abaixo e se surpreenda com a beleza dos servos de Deus!</p>
      <div className="mt-10 flex justify-center">
        <div className="overflow-x-scroll flex">
            {galleryData[0] ? galleryData.map((post: any, index: number) => {
              return (
                <div key={index}>
                  <div className="flex items-center mx-10 my-6 min-w-[300px] max-xs:min-w-[250px] relative after:bg-yellow-700/30 after:w-full after:h-full after:absolute after:backdrop-blur-sm after:rounded-md hover:after:w-[0px] after:duration-300">
                    <a href={`/album/${post._id}`} className="flex items-center">
                      <p className="absolute z-50 font-medium text-[26px] bg-yellow-600/70 px-4 py-2 w-full text-center text-yellow-400 backdrop-blur-sm cursor-pointer">Ver album</p>
                      <Image src={urlFor(post.imagens[0]).url()} alt="Gallery images" width={2000} height={2000} className='w-[300px] h-[400px] rounded-md object-cover max-xs:w-[250px]'></Image>
                    </a>
                  </div>
                </div>
              )
            }) : ''}
        </div>
      </div>
      
    </div>
  )
}
