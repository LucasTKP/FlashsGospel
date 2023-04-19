import { client } from '@/lib/sanity'
import { Header } from './Header'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

import Quotes from '@/public/quotes.svg'

async function getHeroDatas() {
    return await client.fetch(`*[_type == "hero"]`)
}

export default async function Hero() {
    const heroData = await getHeroDatas()

    return (
        <section>
            <Header logo={heroData[0].logo}/>
            <div className='flex w-full justify-between max-lg:flex-wrap-reverse'>
                <div className='flex lg:flex-col w-[800px] px-20 max-xl:w-[700px] max-xl:px-14 max-lg:mx-auto max-lg:mt-[-100px] max-lg:gap-5 max-md:gap-2 max-md:justify-center max-sm:mt-[-50px] max-xs:hidden'>
                    <Image src={urlFor(heroData[0].image1).url()} alt='Primeira imagem da Hero Section' width={350} height={250} className='max-xl:w-[300px] max-md:w-[250px] max-sm:w-[200px] border-4 border-yellow-500 rounded-lg'></Image>
                    <Image src={urlFor(heroData[0].image2).url()} alt='Segunda imagem da Hero Section' width={350} height={250} className='md:ml-auto lg:mt-[-70px] max-xl:w-[300px] max-md:w-[250px] max-sm:w-[200px] border-4 border-yellow-500 rounded-lg'></Image>
                </div>
                <div className="bg-hero-square bg-cover bg-no-repeat bg-bottom px-[110px] py-[90px] max-h-[850px] grow max-xl:pb-[180px] outline-4 outline-[#F3F3F3] outline outline-offset-[-60px] max-sm:pb-[120px] max-xs:outline-offset-[-20px] max-xs:px-[40px] max-xs:py-[40px] max-xs:pb-[120px]">
                    <h1 className='font-castoro text-[60px] block max-w-[600px] max-xl:text-[50px] max-xl:leading-tight max-sm:text-[40px] max-xs:text-[35px]'>{heroData[0].titulo}</h1>
                    <blockquote className='font-medium text-[20px] max-w-[400px] ml-5 mt-10 max-xl:mt-5 max-sm:text-[18px] max-sm:mt-2'><Image src={Quotes} alt='Quotes' className='ml-[-35px] mb-[-20px]'></Image>{heroData[0].subtitulo}</blockquote>
                    <button className='mt-20 max-xl:mt-10 border border-neutral-800 px-5 py-3 rounded-sm text-[18px] font-medium cursor-pointer hover:bg-yellow-300'>Conheça meu trabalho</button>
                </div>
            </div>
        </section>
    )
}
