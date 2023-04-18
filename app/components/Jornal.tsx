import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

export default function Jornal({props}: any) {
    const jornalData = props
    
    return (
        <div id={'jornal'} className="w-full lg:container mx-auto mt-10 px-4 max-md:px-1">
            <div className="bg-yellow-500 h-[200px] max-sm:h-[180px] max-xs:h-[150px] rounded-lg flex items-center justify-center outline-4 outline-[#F3F3F3] outline outline-offset-[-40px] max-sm:outline-offset-[-30px] max-xm:outline-offset-[-20px] mb-[30px]">
                <h3 className="text-[60px] font-castoro text-white max-sm:text-[40px] max-xs:text-[35px]">Jornal</h3>
            </div>
            {jornalData?.map((jornal:any, index:number) => {
                if(jornal.imagens && jornal.texto && jornal.foto_escritor && jornal.nome_escritor){
                    return (
                        <div key={index} className='mb-[15px] flex w-full gap-[20px] max-md:gap-[10px] relative'>
                            <Image src={urlFor(jornal.imagens[0]).url()} width={550} height={200}  alt={'Capa do jornal'} className='max-2xl:w-[450px] max-xl:w-[400px] max-lg:w-[300px] max-md:w-[250px] max-sm:w-[200px] max-xs:w-[150px] rounded-[4px] border-black border-[1px] aspect-video'/>
                            <div className='w-full flex flex-col justify-between'>
                                <div className='w-full'>
                                    <p className='font-castoro text-[28px] max-md:text-[20px] truncate  w-[900px] max-2xl:w-[750px] max-xl:w-[550px] max-lg:w-[400px] max-md:w-[340px] max-sm:w-[240px] max-xs:w-[180px]'>adsa dasd asdas asdasd adasdasd adasd asd adsadasd adsadasd asdasda asdasd asda sda dasdasda dasda sdasd ads</p>
                                    <p className='text-[18px] max-md:text-[16px] w-full overflow-hidden text-ellipsis line-clamp-3'>{jornal.texto}</p>
                                    <p className='text-[18px] max-md:text-[16px] font-[500] underline cursor-pointer'>{'Ver mais >'}</p>
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
    )
}
