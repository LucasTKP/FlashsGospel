'use client'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { ChevronRightIcon, ChevronLeftIcon} from '@sanity/icons'

function Carrossel({videos}:any) {
  const [numberCarrossel, setNumberCarrossel] = useState(0)
  const [content, setContent] = useState<any>()
  const [width, setWidth] = useState<number>(1000);
  const Ref1 = useRef<HTMLDivElement>(null)

  useEffect(() =>{
    const allContent = []

    for(var i = 0; i < videos?.length; i ++){
      var url = videos[i].split('=')
      url = 'https://www.youtube.com/embed/' + url.pop()
      const data = {
        url:url,
        type:'video'
      }
      allContent.push(data)
    }

    setContent(allContent)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useLayoutEffect(() => {
    function updateWidth() {
      if(Ref1.current){
        setWidth(Ref1.current?.offsetWidth);
      }
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function ChangeCarrossel(type:string){
    if(type === 'right'){
      if(numberCarrossel + 1 < content.length){
        setNumberCarrossel(numberCarrossel + 1)
      }
    }

    if(type === 'left'){
      if(numberCarrossel - 1 >= 0){
        setNumberCarrossel(numberCarrossel - 1)
      } 
    }
  }

  return (
    <div className='w-full flex justify-center items-center'>
      <div ref={Ref1} className='group max-w-[900px] max-h-[450px] w-full h-full bg-black flex items-center justify-between relative select-none user-select-none overflow-x-hidden aspect-video'>
        {content?.map((content:any, index:number) => {
          if(content.type === 'video'){
            return (
              <div key={index} className={`z-10 absolute w-full h-full right-0 left-0  duration-500`} style={{left:index === numberCarrossel ? '' : index < numberCarrossel ? -width : width}}>
                <iframe width="100%" height="100%" src={content.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            )
          } else {

            return (
              <div key={index} className={`z-10 absolute w-full h-full right-0 left-0  duration-500`} style={{left:index === numberCarrossel ? '' : index < numberCarrossel ? -width : width}}>
                <Image src={urlFor(content).url()} alt='Segunda imagem da Hero Section' width={2000} height={2000} className='w-full h-full aspect-video' />
              </div>
            )
          }
        })}


        <div onClick={() => ChangeCarrossel('left')} className='lg:opacity-0  duration-300 group-hover:opacity-[100] flex text-white  items-center absolute left-[10px] top-0 bottom-0'>
          <ChevronLeftIcon width={50} height={50} className='z-20 bg-black/20 rounded-full cursor-pointer'/>
        </div> 

        <div onClick={() => ChangeCarrossel('right')} className='lg:opacity-0  duration-300 group-hover:opacity-[100] flex text-white items-center absolute right-[10px] top-0 bottom-0'>
          <ChevronRightIcon width={50} height={50} className='z-20 bg-black/20 rounded-full cursor-pointer'/>
        </div> 
      </div>
    </div>
  )
}

export default Carrossel