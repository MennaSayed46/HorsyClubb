import React, { useEffect, useState } from 'react';
import style from './FAQ.module.css'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import rightSideImage from '/firstRideImage.jpg'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

export default function Faq() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(activeItem === item ? null : item);

  }

  function handleSubmit(values, { resetForm }) {
    toast.success('Form submitted successfully!');
   
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
          <div className="flex justify-around items-center py-6 bg-[#fffdfdec] shadow-lg p-3  ">
            <p className={`text-[#191c44] font-medium about`}>Frequently Asked Questions</p>
            <p className={`aboutUs`}>
              <Link to={'/'}>
                <i className="text-sm text-[#191c44bf] fa-solid fa-house mr-1"></i>
              </Link>
              <i className="mr-1 text-sm fa-solid fa-greater-than text-[#191c44bf]"></i> Frequently Asked Questions
            </p>
          </div>


          <div className="flex  flex-col md:flex-row justify-center items-center w-4/5 mx-auto gap-6 py-12 my-12">
            <div className="left flex flex-col ">
              <p className={` ${style.faq} font-medium my-2 text-[#a07253]`}>F. A. Q.</p>
              <p className={`font-meduim ${style.questions} text-[#191c44] `}>Do you have any questions?</p>
              <p className={`${style.desc} text-[#191c4499]`}>Please read questions bellow and if you can not find your answer, please send us your question, we will answer you as soon as possible. We depend on volunteers from our local community, joining us you can both gain experience and help others.</p>

              <div className="flex flex-row gap-3 group my-3">
                <div className="icon p-5 flex justify-center items-center bg-[#fffdfd94] group-hover:shadow-xl  group-hover:bg-white transition duration-200">
                  <i className="fa-solid fa-question"></i>
                </div>

                <div>
                  <p className={`${style.FAQS} font-medium text-[#191c44]`}>F.A.Qs</p>
                  <p className={`${style.desc} text-[#a07253]`}>Frequently asked questions</p>
                </div>
              </div>

              <div className={`${activeItem === 1 && 'shadow-lg'} my-2`}>
                <div className={`flex justify-between items-center  p-3  ${activeItem === 1 ? 'bg-white border ' : 'bg-[#fff7f4]'}  `} onClick={() => handleClick(1)}>
                  <p className={`${style.ItemTitle} text-[#191c44] ${activeItem === 1 && `font-bold ${style.ItemActiveTitle}`} `}>Your Question Title?</p>
                  <p> <i className={`text-[#a07253] font-medium cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i></p>

                </div>

                <AnimatePresence>
                  {activeItem === 1 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className={`bg-white w-full overflow-hidden ${style.itemDesc} p-3`}
                    >
                      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </motion.div>
                  )}
                </AnimatePresence>


              </div>


              <div className={`${activeItem === 2 && 'shadow-lg'} my-2`}>

                <div className={`  flex justify-between items-center  p-3  ${activeItem === 2 ? 'bg-white border shadow-lg ' : 'bg-[#fff7f4]'}  `} onClick={() => handleClick(2)}>
                  <p className={`${style.ItemTitle} text-[#191c44] ${activeItem === 2 && `font-bold ${style.ItemActiveTitle}`} `}>Do eiusmod tempor incidit?</p>
                  <p> <i className={`text-[#a07253] font-medium cz_acc_close_icon fa ${activeItem === 2 ? 'fa-angle-up' : 'fa-angle-down'}`}></i></p>

                </div>

                <AnimatePresence>
                  {activeItem === 2 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className={`bg-white w-full overflow-hidden ${style.itemDesc} p-3`}
                    >
                      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </motion.div>
                  )}
                </AnimatePresence>


              </div>

              <div className={`${activeItem === 3 && 'shadow-lg'} my-2`}>
                <div className={`  flex justify-between items-center  p-3  ${activeItem === 3 ? 'bg-white border shadow-lg ' : 'bg-[#fff7f4]'}  `} onClick={() => handleClick(3)}>
                  <p className={`${style.ItemTitle} text-[#191c44] ${activeItem === 3 && `font-bold ${style.ItemActiveTitle}`} `}>Cupidatat iusmod tempor incid idun?</p>
                  <p> <i className={`text-[#a07253] font-medium cz_acc_close_icon fa ${activeItem === 3 ? 'fa-angle-up' : 'fa-angle-down'}`}></i></p>

                </div>

                <AnimatePresence>
                  {activeItem === 3 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className={`bg-white w-full overflow-hidden ${style.itemDesc} p-3`}
                    >
                      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </motion.div>
                  )}
                </AnimatePresence>


              </div>

              <div className={`${activeItem === 4 && 'shadow-lg'} my-2`}>
                <div className={`  flex justify-between items-center  p-3  ${activeItem === 4 ? 'bg-white border shadow-lg ' : 'bg-[#fff7f4]'}  `} onClick={() => handleClick(4)}>
                  <p className={`${style.ItemTitle} text-[#191c44] ${activeItem === 4 && `font-bold ${style.ItemActiveTitle}`} `}>Excepteur sint occaecat cupidatat iusmod tempor incid idun?</p>
                  <p> <i className={`text-[#a07253] font-medium cz_acc_close_icon fa ${activeItem === 4 ? 'fa-angle-up' : 'fa-angle-down'}`}></i></p>

                </div>

                <AnimatePresence>
                  {activeItem === 4 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className={`bg-white w-full overflow-hidden ${style.itemDesc} p-3`}
                    >
                      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </motion.div>
                  )}
                </AnimatePresence>



              </div>

              <div className={`${activeItem === 5 && 'shadow-lg'} my-2`}>
                <div className={`  flex justify-between items-center  p-3  ${activeItem === 5 ? 'bg-white border shadow-lg ' : 'bg-[#fff7f4]'}  `} onClick={() => handleClick(5)}>
                  <p className={`${style.ItemTitle} text-[#191c44] ${activeItem === 5 && `font-bold ${style.ItemActiveTitle}`} `}>Consectetur adipisicing elit, sed do eiusmod tempor incididunt?</p>
                  <p> <i className={`text-[#a07253] font-medium cz_acc_close_icon fa ${activeItem === 5 ? 'fa-angle-up' : 'fa-angle-down'}`}></i></p>

                </div>

                <AnimatePresence>
                  {activeItem === 5 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className={`bg-white w-full overflow-hidden ${style.itemDesc} p-3`}
                    >
                      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </motion.div>
                  )}
                </AnimatePresence>



              </div>

              <div className={`${activeItem === 6 && 'shadow-lg'} my-2`}>
                <div className={`  flex justify-between items-center  p-3  ${activeItem === 6 ? 'bg-white border shadow-lg ' : 'bg-[#fff7f4]'}  `} onClick={() => handleClick(6)}>
                  <p className={`${style.ItemTitle} text-[#191c44] ${activeItem === 6 && `font-bold ${style.ItemActiveTitle}`} `}>Ut enim ad minim veniam, quis nostrud exercitation ullamco?</p>
                  <p> <i className={`text-[#a07253] font-medium cz_acc_close_icon fa ${activeItem === 6 ? 'fa-angle-up' : 'fa-angle-down'}`}></i></p>

                </div>

                <AnimatePresence>
                  {activeItem === 6 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className={`bg-white w-full overflow-hidden ${style.itemDesc} p-3`}
                    >
                      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </motion.div>
                  )}
                </AnimatePresence>



              </div>

              <div className={`${activeItem === 7 && 'shadow-lg'} my-2`}>
                <div className={`  flex justify-between items-center  p-3  ${activeItem === 7 ? 'bg-white border shadow-lg ' : 'bg-[#fff7f4]'}  `} onClick={() => handleClick(7)}>
                  <p className={`${style.ItemTitle} text-[#191c44] ${activeItem === 7 && `font-bold ${style.ItemActiveTitle}`} `}>Excepteur sint occaecat cupidatat iusmod tempor incid idun?</p>
                  <p> <i className={`text-[#a07253] font-medium cz_acc_close_icon fa ${activeItem === 7 ? 'fa-angle-up' : 'fa-angle-down'}`}></i></p>

                </div>

                <AnimatePresence>
                  {activeItem === 7 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className={`bg-white w-full overflow-hidden ${style.itemDesc} p-3`}
                    >
                      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </motion.div>
                  )}
                </AnimatePresence>



              </div>


              <div className={`${activeItem === 8 && 'shadow-lg'} my-2`}>
                <div className={`  flex justify-between items-center  p-3  ${activeItem === 8 ? 'bg-white border shadow-lg ' : 'bg-[#fff7f4]'}  `} onClick={() => handleClick(8)}>
                  <p className={`${style.ItemTitle} text-[#191c44] ${activeItem === 8 && `font-bold ${style.ItemActiveTitle}`} `}>Cupidatat iusmod tempor incid idun?</p>
                  <p> <i className={`text-[#a07253] font-medium cz_acc_close_icon fa ${activeItem === 8 ? 'fa-angle-up' : 'fa-angle-down'}`}></i></p>

                </div>

                <AnimatePresence>
                  {activeItem === 8 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className={`bg-white w-full overflow-hidden ${style.itemDesc} p-3`}
                    >
                      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </motion.div>
                  )}
                </AnimatePresence>



              </div>






            </div>


            <div className="right ">
              <img src={rightSideImage} alt="horse-image" />


              <div className="flex flex-col gap-3  my-10" >
                <form >
                
                  <div className={`name ${style.name} my-2 `}>
                    <label htmlFor="name"></label>
                    <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id='name' name='name' placeholder='Your name' className='outline-none rounded-sm text-black  w-full p-1 ' required />
                  </div>
                  <div className={`phone ${style.phone} my-2`}>
                    <label htmlFor="phone"></label>
                    <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id='phone' name='phone' placeholder='Your phone' className='outline-none rounded-sm text-black  w-full p-1 ' required />
                  </div>
                  <div className={`subject ${style.subject} my-2`}>
                    <label htmlFor="subject"></label>
                    <input value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id='subject' name='subject' placeholder='subject' className='outline-none rounded-sm text-black  w-full p-1 ' required />
                  </div>
                  <div className={`services my-2 ${style.services}`}>
                    <label for="services"></label>
                    <select value={formik.values.service} onChange={formik.handleChange} onBlur={formik.handleBlur} id="services" className='outline-none rounded-sm text-black  w-full p-1 ' >

                      <option className='text-gray-500 text-sm'>Services</option>
                      <option className='text-gray-500 text-sm'>Nail art</option>
                      <option className='text-gray-500 text-sm'>Manicure</option>
                      <option className='text-gray-500 text-sm'>Pedicure</option>
                      <option className='text-gray-500 text-sm'>Others</option>
                    </select>
                  </div>

                  <div className={`${style.message}`}>
                    <textarea value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} name="message" id="message" placeholder='Your Message' className='w-full p-2'></textarea>
                  </div>

                  <button onClick={formik.handleSubmit} className={`btn border border-solid border-[#a07253] my-4 text-[#a07253] p-2 rounded-md font-meduim ${style.btn}  transition duration-200 hover:bg-white hover:text-black mx-auto`}>Send message</button>

                  {formik.errors.general && <div className='text-red-600 rounded-2xl p-2 border-red-600 border'>
                    {formik.errors.general}
                  </div>}
                </form>

              </div>

            </div>

          </div>












        </div>
      </section>

    </>
  )
}
