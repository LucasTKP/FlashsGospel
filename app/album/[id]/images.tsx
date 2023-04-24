'use client'

import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Image from "next/image"

export default function Cards({images}: any) {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <div className="flex mt-10 gap-10 justify-center max-w-[1000px] flex-wrap">
        {images.map((image: any, index: number) => {
        return <Image key={index} src={image} alt="Fotos" width={2800} height={2800} onClick={() => {
          setPhotoIndex(index)
          setIsOpen(true)
        }} className="w-[280px] h-[280px] border-2 border-yellow-500 rounded-sm max-sm:w-[200px] min-h-[400px] object-cover cursor-pointer max-md:min-h-[300px]"></Image>
        })}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + images.length - 1) % images.length,
              )
            }
            onMoveNextRequest={() =>
                setPhotoIndex(
                (photoIndex + 1) % images.length,
              )
            }
          />
        )}
    </div>
  )
}
