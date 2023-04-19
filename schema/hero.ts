export const hero = {
    type: "document",
    name: "hero",
    title: "Hero",
    fields: [
      {
        title: 'Logo',
        name: 'logo',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        title: 'Image1',
        name: 'image1',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        title: 'Image2',
        name: 'image2',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      { 
        name: 'titulo',
        type: 'string',
        title: 'Título'
      },
      { 
        name: 'subtitulo',
        type: 'string',
        title: 'SubTítulo'
      }
    ]
  }