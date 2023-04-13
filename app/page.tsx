import { Hero } from "./components"

export default async function Home() {
  return (
    <>
    {/* @ts-expect-error Async Server Component */}
      <Hero />
    </>
  )
}
