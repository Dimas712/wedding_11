import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/galeri1.png",
  "/galeri2.png",
  "/galeri3.jpg",
  "/galeri4.jpeg",
  "/galeri5.jpeg",
]

const Galeri = () => {
    const setting = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 3000,  
    arrows: false,        
    pauseOnHover: true,
    }

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Galeri</h2>
      <div className="max-w-3xl mx-auto">
        <Slider {...setting}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Galeri ${index + 1}`}
                className="rounded-2xl shadow-lg object-contain max-h-[500px] mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Galeri