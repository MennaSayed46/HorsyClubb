

import React, { useEffect, useState } from 'react';
import style from './Gallery.module.css';
import img1 from '/img1.jpg';
import img2 from '/img2.jpg';
import img3 from '/newsletter.jpg';
import img4 from '/img3.jpg';
import img5 from '/horseImageOfWorkingHourSection.jpg';
import img6 from '/img6.jpg';

import { Link } from 'react-router-dom';

export default function Gallery() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(null);

 
  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };


  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <section className='w-full bg-[#fdf2ec]'>
        <div className="main py-12">
          <div className="flex justify-around items-center py-6 bg-[#fffdfdec] shadow-lg p-3 ">
            <p className={`text-[#191c44] font-medium  about`}>Gallery</p>
            <p className={`aboutUs`}>
              <Link to={'/'}>
                <i className="text-sm text-[#191c44bf] fa-solid fa-house mr-1"></i>
              </Link>
              <i className="mr-1 text-sm fa-solid fa-greater-than text-[#191c44bf]"></i> Gallery
            </p>
          </div>

          <div className="flex flex-col justify-center items-center py-12">
            <p className={`text-[#a07253] ${style.services} services mt-4`}>Winter Event</p>
            <p className={`${style.offer} font-medium offer text-[#191c44] mb-4`}>Horse Festival of 2022</p>

            <div className={`holder ${style.gallery} w-4/5 mx-auto py-12`}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`item${index + 1} ${style[`item${index + 1}`]} bg-white p-3 rounded-md relative group`}
                  onClick={() => openModal(index)}
                >
                  <img src={image} alt={`image${index + 1}`} className='w-full h-full' />
                  <div className='hovered absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-500 hidden group-hover:block'>
                    <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                  </div>
                </div>
              ))}
            </div>

            
            {currentIndex !== null && (
              <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50`}>
                <div className="relative">
                  <button
                    className="absolute top-4 right-4 text-[#191c44] font-medium text-3xl"
                    onClick={closeModal}
                  >
                    <i className="fa-solid fa-x"></i>
                  </button>
                  <img src={images[currentIndex]} alt={`image${currentIndex + 1}`} className='max-w-full max-h-screen' />

                  
                  <button className="absolute top-1/2 left-4 text-[#191c44] font-medium text-3xl" onClick={prevImage}>
                    &#10094;
                  </button>
                  <button className="absolute top-1/2 right-4 text-[#191c44] font-medium text-3xl" onClick={nextImage}>
                    &#10095;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
