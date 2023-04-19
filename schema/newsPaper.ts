export const newsPaper = {
    name: "jornal",
    type: "document",
    title: "Jornal",
    fields: [
      { 
        name: 'titulo',
        type: 'string',
        title: 'Título'
      },
      { 
        name: 'texto',
        type: 'text',
        title: 'Texto'
      },
      {
        name: "imagens",
        type: "array",
        title: "Imagens",
        of: [
          { 
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            }
          }
        ]
      },
      { 
        name: 'nome_escritor',
        type: 'string',
        title: 'Nome do Escritor'
      },
      {
        title: 'Foto do Escritor',
        name: 'foto_escritor',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        name: "videos",
        type: "array",
        title: "Url dos Videos",
        of: [
          { 
            title: 'Url do Video',
            name: 'video',
            type: 'string'
          }
        ]
      },
    ]
  }