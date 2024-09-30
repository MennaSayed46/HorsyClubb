import React, { useEffect } from 'react';
import style from './Contact.module.css'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

export default function Contact() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  function handleSubmit(values) {
    console.log(values);
  }

  function validate(values) {
    const errors = {}
    if (!values.name || values.phone || values.subject || values.service || values.message) {
      errors.general = 'There was an error trying to send your message. Please try again later.'

    }
    return errors;
  }

  let formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      subject: '',
      message: '',
      service: '',
    },
    onSubmit: handleSubmit,
    validate,
  })

  return (
    <>
      <section className='w-full bg-[#fdf2ec]'>
        <div className="main py-12">
          <div className="flex justify-around items-center py-6 bg-[#fffdfdec] shadow-lg p-3 ">
            <p className={`text-[#191c44] font-medium about`}>Contact</p>
            <p className={` aboutUs`}>
              <Link to={'/'}>
                <i className="text-sm text-[#191c44bf] fa-solid fa-house mr-1"></i>
              </Link>
              <i className="mr-1 text-sm fa-solid fa-greater-than text-[#191c44bf]"></i> Contact
            </p>
          </div>



          <div className="flex md:flex-row flex-col justify-center md:items-center items-start  gap-12 py-12">
            <div className="phone flex flex-row gap-3 justify-center items-center group">
              <div className={`icon w-[100px] h-[100px] bg-[#191c44] justify-center items-center flex group-hover:shadow-lg group-hover:bg-[#a07253] group-hover:shadow-[#a07253] group-hover:animate-shake`}>
                <i className="fa-solid fa-phone text-[#a07253] text-3xl group-hover:text-white"></i>
              </div>

              <div className="details">
                <p className={`${style.title} text-gray-500`}>Phone</p>
                <p className={`${style.details} text-[#a07253] font-bold`}>+20 01119121377</p>
              </div>

            </div>


            <a href="mailto:Mennaabdelateef910@gmail.com">
              <div className="email flex flex-row gap-3 justify-center items-center group cursor-pointer">
                <div className={`icon w-[100px] h-[100px] bg-[#191c44] justify-center items-center flex group-hover:shadow-lg group-hover:bg-[#a07253] group-hover:shadow-[#a07253] group-hover:animate-shake`}>
                  <i className="fa-solid fa-envelope text-[#a07253] text-3xl group-hover:text-white"></i>
                </div>

                <div className="details">
                  <p className={`${style.title} text-gray-500`}>Email:</p>
                  <p className={`${style.details} text-[#a07253] font-bold`}>MennaSayed</p>
                </div>
              </div>
            </a>


            <div className="location flex flex-row gap-3 justify-center items-center group">
              <div className={`icon w-[100px] h-[100px] bg-[#191c44] justify-center items-center flex group-hover:shadow-lg group-hover:bg-[#a07253] group-hover:shadow-[#a07253] group-hover:animate-shake`}>
                <i className="fa-solid fa-location-dot text-[#a07253] text-3xl group-hover:text-white"></i>
              </div>

              <div className="details">
                <p className={`${style.title} text-gray-500`}>Office Adress</p>
                <p className={`${style.details} text-[#a07253] font-bold`}>Egyptian Equestrian Center, Giza</p>
              </div>

            </div>


          </div>


          <div className="flex w-4/5 mx-auto flex-col md:flex-row justify-center items-center gap-4 py-12">
            <div className="map-container relative w-full">
              <iframe className='w-full'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8887943994073!2d31.142171275184598!3d29.95387717496934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f37369b789b%3A0x7724b97c856263f9!2sCairo%20Horse%20Riding%20School!5e0!3m2!1sen!2seg!4v1727629873497!5m2!1sen!2seg"
                
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>

              <div className="layout absolute top-0 bottom-0 inset-x-0 bg-[#0000005d]"></div>
            </div>


            <div className="touch bg-[#191c44] px-4 py-8 flex flex-col items-center justify-center w-full md:relative md:left-[-10%]">
              <p className={`text-white font-medium ${style.touch}`}>Keep in Touch</p>
              <p className={`text-[#a07253] font-medium ${style.contact} pb-3`}>Contact Us</p>

              <form className={` flex flex-col items-center justify-center w-full `}>
                <div className={`grid w-full ${style.form}`}>
                  <div className={`name ${style.name}`}>
                    <label htmlFor="name"></label>
                    <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id='name' name='name' placeholder='Your name' className='outline-none rounded-sm text-black  w-full  ' required />
                  </div>
                  <div className={`phone ${style.phone}`}>
                    <label htmlFor="phone"></label>
                    <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id='phone' name='phone' placeholder='Your phone' className='outline-none rounded-sm text-black  w-full ' required />
                  </div>
                  <div className={`subject ${style.subject}`}>
                    <label htmlFor="subject"></label>
                    <input value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id='subject' name='subject' placeholder='subject' className='outline-none rounded-sm text-black  w-full ' required />
                  </div>
                  <div className={`services ${style.services}`}>
                    <label for="services"></label>
                    <select value={formik.values.service} onChange={formik.handleChange} onBlur={formik.handleBlur} id="services" className='outline-none rounded-sm text-black  w-full ' >

                      <option className='text-gray-500 text-sm'>Services</option>
                      <option className='text-gray-500 text-sm'>Nail art</option>
                      <option className='text-gray-500 text-sm'>Manicure</option>
                      <option className='text-gray-500 text-sm'>Pedicure</option>
                      <option className='text-gray-500 text-sm'>Others</option>
                    </select>
                  </div>

                  <div className={`${style.message}`}>
                    <textarea value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} name="message" id="message" placeholder='Your Message' className='w-full py-2'></textarea>
                  </div>
                </div>

                <button  onClick={formik.handleSubmit}  className={`btn border border-solid border-[#a07253] my-4 text-[#a07253] p-2 rounded-md font-meduim ${style.btn}  transition duration-200 hover:bg-white hover:text-black mx-auto`}>Send message</button>

                {formik.errors.general && <div className='text-red-600 rounded-2xl p-2 border-red-600 border'>
                  {formik.errors.general}
                  </div>}


              </form>

            </div>
          </div>



        </div>
      </section>

    </>
  )
}
