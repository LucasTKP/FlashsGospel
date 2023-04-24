import { client } from '@/lib/sanity'
import { Header } from '../../components/Header'
import { Footer } from '@/app/components'
import Carrossel from './carrossel';
import { urlFor } from '@/lib/sanity'
import Cards from './images';

async function getHeroDatas() {
    return await client.fetch(`*[_type == "hero"]`)
}

async function getAlbumsDatas(id: string) {
    return await client.fetch(`*[_id == "${id}"]`)
}

async function Page(param:any) {
    const heroData = await getHeroDatas()
    const id = param?.params?.id
    const albumData  = await getAlbumsDatas(id)

    const imagesUrls = albumData[0].imagens.map((image: any) => {
        return urlFor(image).url()
    })

    return (
        <section>
            <Header logo={heroData[0].logo}/>
            <div className='w-full flex flex-col items-center'>
                <div className='w-[80%] max-lg:w-[95%]'>
                    {albumData && albumData[0].videos ?  <Carrossel videos={albumData[0].videos} /> : ''}
                    <h3 className='text-center text-[30px] max-lg:text-[28px] max-sm:text-[26px] font-[600] mt-[20px] overflow-hidden text-ellipsis'>{albumData[0]?.titulo}</h3>
                    <p className='text-[20px] max-lg:text-[18px] max-sm:text-[16px] whitespace-pre-wrap  my-[20px] mt-[30px] max-w-[1200px] text-center mx-auto'>{albumData[0]?.texto}</p>
                </div>
                <Cards images={imagesUrls}/>
            </div>
            {/* @ts-expect-error Async Server Component */}
            <Footer />
        </section>
    )
}

export default Page