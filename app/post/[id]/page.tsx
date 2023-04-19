import { client } from '@/lib/sanity'
import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '@/app/components'
import Carrossel from './carrossel';
import { JornalData } from '@/types/interface';
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

async function getHeroDatas() {
    return await client.fetch(`*[_type == "hero"]`)
}

async function Page(param:any) {
    const heroData = await getHeroDatas()
    const id = param?.params?.id
    const jornalData:JornalData[]  = await client.fetch(`*[_id == "${id}"]`)

    return (
        <section>
            <Header logo={heroData[0].logo}/>
            <div className='w-full flex flex-col items-center'>
                <div className='w-[80%] max-lg:w-[95%]'>
                    <Carrossel imagens={jornalData ? jornalData[0].imagens : ''} videos={jornalData ? jornalData[0].videos : ''} />
                    <div className='flex items-center mt-[15px] gap-[5px]'>
                        <Image className='max-sm:w-[40px] max-sm:h-[40px] aspect-square rounded-full border-[1px] border-black' src={jornalData ? urlFor(jornalData[0]?.foto_escritor).url() : ''} width={50} height={50}  alt='Perfil do Escritor'/>
                        <p className='text-[20px] max-sm:text-[18px] font-[500] truncate'>{jornalData[0]?.nome_escritor}</p>
                    </div>
                    <p className='text-[20px] max-lg:text-[18px] max-sm:text-[16px] whitespace-pre-wrap mt-[15px]'>{jornalData[0]?.texto}</p>
                </div>
            </div>
            {/* @ts-expect-error Async Server Component */}
            <Footer />
        </section>
    )
}

export default Page