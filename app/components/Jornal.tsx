import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'

export default function Jornal({props}: any) {
    const jornalData = props
    
    if(!jornalData){ return <></>}
        return (
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
                            <div key={index} className='mb-[15px] flex w-full gap-[20px] max-md:gap-[10px] relative'>
                                {
                                    jornal.imagens ?
                                    <div className='flex max-2xl:max-w-[450px] max-xl:max-w-[400px] max-lg:max-w-[300px] max-md:max-w-[250px] max-sm:max-w-[200px] max-xs:max-w-[150px] aspect-video bg-black justify-center rounded-[4px]'>
                                        <Image src={urlFor(jornal.imagens[0]).url()} width={2000} height={2000}  alt={'Capa do jornal'} className='w-auto h-auto '/> 
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
                <div className='flex w-full justify-center'>
                    <Link href={'/jornal'}  className='hover:scale-105 duration-200'>
                        <p className='text-[25px] text-center font-[500] bg-yellow-200 rounded-[8px] mt-[20px] py-[3px] px-[15px] border-[2px] border-yellow-500'>Ver Mais</p>
                    </Link >
                </div>
            </div>
        )
    
}
