export const sponsors = {
    name: "patrocinadores",
    type: "document",
    title: "Patrocinadores",
    fields: [
      {
        name: "image_Patrocinadores",
        type: "array",
        title: "Imagens Patrocinadores",
        of: [
          { 
            title: 'Imagens Patrocinadores',
            name: 'image_Patrocinadores',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            }
          }
        ]
      },
    ]
}