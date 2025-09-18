import React from 'react'
import { GalleryImg } from './Components/GalleryImg'

const Gallery = () => {
  return (
    <div className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('/assets/mandala.png')] bg-repeat opacity-10"></div>
      </div>
      <div className="relative z-10">
        <GalleryImg/>
      </div>
    </div>
  )
}

export default Gallery
