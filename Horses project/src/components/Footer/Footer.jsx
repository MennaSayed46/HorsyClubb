import React, { useEffect, useState } from 'react';
import style from './Footer.module.css'
import hat from '/Hat.png'
import footerImage from '/footer-img.png'
import logo from '/logo.png'

export default function Footer() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section className='footer w-full'>
        <div className="main w-3/4 mx-auto flex justify-around items-center md:flex-row flex-col  gap-4">

          <div className="left md:relative md:mt-[-5%] mt-0 ">
            <img src={footerImage} alt="footer-main-image" className='w-[405px] h-[450px] object-cover' />

            <div className="flex flex-col justify-start ">
              <img src={logo} alt="logo-image" className='w-[100px] h-[50px] object-cover' />
              <p className={`text-[#191c44]  ${style.horsyClub}`}>Horsey horse club is one of the last standing mews with horses in mews with horses in Central London.</p>
              <div className="icons gap-3 flex flex-row items-center justify-center my-6 py-6">
                <div className={`firstIcon border-[#fdf2ec] hover:bg-[#a07253] hover:text-white duration-500 transition-all border  relative ${style.icon}`}>
                  <i className={` fa-brands text-center fa-facebook-f text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center`}></i>
                  <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                    <p>Facebook</p>
                  </div>
                </div>
                <div className={`secondIcone border-[#fdf2ec] hover:bg-[#a07253] hover:text-white duration-500 transition-all border  relative ${style.icon}`}>
                  <i className={` fa-brands text-center fa-instagram text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center`}></i>
                  <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                    <p>Instagram</p>
                  </div>
                </div>
                <div className={`thirdIcon border-[#fdf2ec] hover:bg-[#a07253] hover:text-white duration-500 transition-all border  relative ${style.icon}`}>
                  <i className={` fa-brands text-center fa-x-twitter text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center`}></i>
                  <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                    <p>Twitter</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="right md:relative md:mt-[-20%] mt-0 flex flex-col  ">
            <img
              src={hat}
              alt="hat-image"
              className="mx-auto"
              style={window.innerWidth >= 1024 ? {
                transform: `translateX(${-scrollPosition * 0.05}px)`,
                transition: 'transform 0.1s ease-out',
                maxWidth: '100%',
                height: 'auto',
              } : null}
            />

            <div className="flex md:flex-row flex-col justify-center items-center gap-6">
              <div className="item flex flex-col items-start justify-center ">
                <p className={`my-2 font-bold text-[#191c44] ${style.links}`}>Quick Links</p>
                <p className='my-1 hover:text-[#a07253] duration-300 transition-all text-sm hover:text-[#a07253] duration-300 transition-all text-sm'><i className="fa-regular fa-square-check mr-1 text-[#a07253]"></i>About Us</p>
                <p className='my-1 hover:text-[#a07253] duration-300 transition-all text-sm'><i className="fa-regular fa-square-check mr-1 text-[#a07253]"></i>Club Pricing</p>
                <p className='my-1 hover:text-[#a07253] duration-300 transition-all text-sm'><i className="fa-regular fa-square-check mr-1 text-[#a07253]"></i>Riding FAQ</p>
                <p className='my-1 hover:text-[#a07253] duration-300 transition-all text-sm'><i className="fa-regular fa-square-check mr-1 text-[#a07253]"></i>Contact Us</p>

              </div>
              <div className="item flex flex-col items-start justify-center ">
                <p className={`my-2 text-[#191c44] ${style.links} font-bold`}>Services</p>
                <p className='my-1 hover:text-[#a07253] duration-300 transition-all text-sm'><i className="fa-regular fa-square-check mr-1 text-[#a07253]"></i>Gift Vouchers</p>
                <p className='my-1 hover:text-[#a07253] duration-300 transition-all text-sm'><i className="fa-regular fa-square-check mr-1 text-[#a07253]"></i>Booking</p>
                <p className='my-1 hover:text-[#a07253] duration-300 transition-all text-sm'><i className="fa-regular fa-square-check mr-1 text-[#a07253]"></i>Club Gallery</p>
                <p className='my-1 hover:text-[#a07253] duration-300 transition-all text-sm'><i className="fa-regular fa-square-check mr-1 text-[#a07253]"></i>Stable Info</p>

              </div>
              <div className="item flex flex-col items-start justify-center ">
                <p className={`my-2 font-bold text-[#191c44] ${style.links}`}>Location</p>
                <div className='location map relative'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110620.44139293143!2d31.0623487390625!3d29.953877200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f37369b789b%3A0x7724b97c856263f9!2sCairo%20Horse%20Riding%20School!5e0!3m2!1sen!2seg!4v1727526046586!5m2!1sen!2seg"
                    width="250"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="overlay absolute top-0 inset-x-0 bottom-0 bg-[#0000005d]"></div>
                </div>


              </div>


            </div>

          </div>





        </div>

      </section>

    </>
  )
}
