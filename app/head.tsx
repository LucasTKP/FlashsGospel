

export default function Head() {
  const description = "Descubra o meu mundo de fotografia artística nesta página. Eu sou um fotógrafo autodidata, especializado em fotografias gospel. Aqui você encontrará uma seleção de minhas fotos favoritas, que refletem minha paixão. Explore o site FlashsGospel!"
  const keywords = "FlashsGospel, Fotos Gospel, Fotografias Gospel, Fotografia de casamento, Fotografia de eventos religiosos, Eventos religiosos"
  return (
    <>
      <title>FlashsGospel</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Manoel Paulo Maciel" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.flashsgospel.com.br/" />
      <meta property="og:image" content="https://drive.google.com/file/d/10ffWjN8MeEb5lATfT-0PvRvZFJeRQuYQ/view?usp=share_link"></meta>
      <meta property="og:type" content="company" />
    </>
  )
}
