import React from 'react'
import { client } from '@/lib/sanity'
import { Header } from '../components/Header'
import { Footer } from '../components'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

async function getHeroAndJornalContents() {
  const heroData = await client.fetch(`*[_type == "hero"]`)
  const jornalData = await client.fetch(`*[_type == "jornal"] | order(_createdAt desc)`) 

  return {heroData, jornalData}
}

async function Page() {
  const {heroData, jornalData} = await getHeroAndJornalContents()
  return (
    <section>
      <Header logo={heroData[0].logo}/>
      <div id={'jornal'} className="w-full lg:container mx-auto mt-10 px-4 max-md:px-1">
        <div className="bg-yellow-500 h-[300px] max-sm:h-[240px] max-xs:h-[210px] rounded-lg flex items-center justify-center outline-4 outline-[#F3F3F3] outline outline-offset-[-40px] max-sm:outline-offset-[-30px] max-xm:outline-offset-[-20px] mb-[30px]">
            <h3 className="text-[60px] font-castoro text-white max-sm:text-[40px] max-xs:text-[35px]">Jornal</h3>
        </div>
          {jornalData?.map((jornal:any, index:number) => {
            
            if(!jornal.imagens && jornal.videos){
              var url = jornal.videos[0].split('=')
              url = 'https://www.youtube.com/embed/' + url.pop()
            }
            
              
              if(jornal.texto && jornal.foto_escritor && jornal.nome_escritor){
                return (
                  <div key={index} className='mb-[25px] flex w-full gap-[20px] max-md:gap-[10px] relative'>
                      {
                        jornal.imagens ? 
                          <div className={`flex max-w-[450px] max-xl:max-w-[400px] max-lg:max-w-[300px] max-md:max-w-[250px] max-sm:max-w-[200px] max-xs:max-w-[150px] aspect-video justify-center rounded-[4px] relative`}>
                            <Image src={urlFor(jornal.imagens[0]).url()} width={2000} height={2000}  alt={'Capa do jornal'} className='w-auto h-auto '/>
                            <div className='w-full h-full absolute z-[-10] bg-black '>
                            <Image src={urlFor(jornal.imagens[0]).url()} width={2000} height={2000}  alt={'Capa do jornal'} className='max-2xl:min-w-[450px] max-xl:min-w-[400px] max-lg:min-w-[300px] max-md:min-w-[250px] max-sm:min-w-[200px] max-xs:min-w-[150px] w-full aspect-video blur-sm opacity-40'/>
                            </div>
                         </div> 
                      : 
                        jornal.videos ? <iframe width="100%" height="100%" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='max-2xl:w-[450px] max-xl:w-[400px] max-lg:w-[300px] max-md:w-[250px] max-sm:w-[200px] max-xs:w-[150px] rounded-[4px] border-black border-[1px] aspect-video' ></iframe> : <></>
                      }
                      <div className='w-full flex flex-col justify-between'>
                          <div className='w-full'>
                              <p className='font-castoro text-[28px] max-md:text-[20px] truncate  w-[900px] max-2xl:w-[750px] max-xl:w-[550px] max-lg:w-[400px] max-md:w-[340px] max-sm:w-[240px] max-xs:w-[180px]'>{jornal.titulo}</p>
                              <p className='text-[18px] max-md:text-[16px] w-full overflow-hidden text-ellipsis line-clamp-3'>{jornal.texto}</p>
                              <Link href={`/post/${jornal._id}`}className='text-[18px] max-md:text-[16px] underline cursor-pointer text-yellow-500 font-medium'>{'Ver mais'}</Link>
                          </div>

                          <div className='mt-[15px] flex items-center gap-[10px] max-sm:hidden'>
                              <Image src={urlFor(jornal.foto_escritor).url()} width={50} height={50}  alt={'Perfil Escritor'} className='max-md:w-[45px] max-md:h-[45px] rounded-full border-black border-[1px] aspect-square'/>
                              <p className=''>{jornal.nome_escritor}</p>
                          </div>
                      </div>
                  </div>
                )
              }
          })} 
        </div>
      
      {/* @ts-expect-error Async Server Component */}
      <Footer />
    </section>
  )
}

export default Page