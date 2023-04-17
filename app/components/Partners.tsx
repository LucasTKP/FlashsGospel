import Image from "next/image"
import { urlFor } from '@/lib/sanity'
import { client } from '@/lib/sanity'

async function getPartnersImages() {
    return await client.fetch(`*[_type == "patrocinadores"]`)
}

export default async function Partners() {

    const partnersImages = await getPartnersImages()

    return (
        <div className="container mx-auto flex flex-col items-center mt-14 px-4">
            <h2 className="text-[34px] relative before:bg-yellow-500/30 before:w-full before:h-[20px] before:absolute before:bottom-0 before:rounded-md">Patrocinadores:</h2>
            <div className="flex mt-10 gap-10 overflow-x-scroll">
                {partnersImages[0].image_Patrocinadores.map((image: any) => {
                    return <Image src={urlFor(image).url()} alt="Patrocinadores" width={300} height={300} className="border-2 border-yellow-500 rounded-sm max-sm:w-[200px] max-sm:h-[150px]"></Image>
                })}
            </div>
        </div>
    )
}
