import { Hero, Partners, Gallery, Jornal, Footer } from "./components"
import { client } from '@/lib/sanity'

async function getGalleryAndJornalContents() {
  const galleryData: object = await client.fetch(`*[_type == "galeria"]`)
  const jornalData: object = await client.fetch(`*[_type == "jornal"] | order(_createdAt desc) [0..2] `) 

  return {galleryData, jornalData}
}

export default async function Home() {
  const {galleryData, jornalData} = await getGalleryAndJornalContents()

  return (
    <>
    {/* @ts-expect-error Async Server Component */}
      <Hero />
      
    {/* @ts-expect-error Async Server Component */}
      <Partners />

      <Gallery props={galleryData}/>

      <Jornal props={jornalData}/>

    {/* @ts-expect-error Async Server Component */}
      <Footer />
    </>
  )
}
