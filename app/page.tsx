import { Hero, Partners, Gallery, Jornal, Footer } from "./components"

export default async function Home() {
  return (
    <>
    {/* @ts-expect-error Async Server Component */}
      <Hero />
      
    {/* @ts-expect-error Async Server Component */}
      <Partners />

    {/* @ts-expect-error Async Server Component */}
      <Gallery />

    {/* @ts-expect-error Async Server Component */}
      <Jornal />

    {/* @ts-expect-error Async Server Component */}
      <Footer />
    </>
  )
}
