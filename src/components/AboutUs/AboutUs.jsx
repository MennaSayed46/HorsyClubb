import React, { useEffect } from 'react';
import style from './AboutUs.module.css'
import { Link } from 'react-router-dom';
import img1 from '/img1.jpg';
import img2 from '/img2.jpg';
import img3 from '/img3.jpg';
import team1 from '/team1.jpg';
import team2 from '/team2.jpg';
import team3 from '/team3.jpg';
import experts from '/experts.jpg';
import legs from '/legs.jpg';
import newsletter from '/newsletter.jpg';
import counterBackground from '/bg2.jpg';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Autoplay } from 'swiper/modules';
export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const settings = {
    // dots: true,
    Autoplay: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <>
      <section className='w-full bg-[#fdf2ec]'>
        <div className="main py-12">
          <div className="flex justify-around items-center py-6 bg-[#fffdfdec] shadow-lg p-3 ">
            <p className={`text-[#191c44] font-medium ${style.about}`}>About us</p>
            <p className={`${style.aboutUs}`}><Link to={'/'}><i className="text-sm text-[#191c44bf] fa-solid fa-house mr-1"></i></Link><i className="mr-1 text-sm fa-solid fa-greater-than text-[#191c44bf]"></i> About Us </p>
          </div>

          <div className="flex flex-col md:flex-row justify-around items-center w-4/5 py-12 mx-auto gap-2">
            <div className="left md:w-1/2 w-full">
              <p>Mission & Vision</p>
              <p>Equestrianism commonly known as horse riding (British English) or horseback riding (American English), includes the disciplines of riding, driving, and vaulting. This broad description includes the use of horses for practical working purposes, transportation, recreational activities, artistic or cultural exercises, and competitive sport.</p>

              <div className="grid md:grid-cols-4 grid-cols-2 py-8 gap-4" >
                <div className={`first flex justify-center items-center ${style.list}`}>
                  <i className="fa-solid fa-check mr-1 border rounded-b-[50%] bg-[#a07253] p-2 text-white"></i>
                  <p>shows</p>
                </div>
                <div className={`second flex justify-center items-center  ${style.list}`}>
                  <i className="fa-solid fa-check mr-1 border rounded-b-[50%] bg-[#a07253] p-2 text-white"></i>
                  <p>Veterinary</p>
                </div>
                <div className={`third flex justify-center items-center  ${style.list}`}>
                  <i className="fa-solid fa-check mr-1 border rounded-b-[50%] bg-[#a07253] p-2 text-white"></i>
                  <p>grooming</p>
                </div>
                <div className={`fourth flex justify-center items-center ${style.list}`}>
                  <i className="fa-solid fa-check mr-1 border rounded-b-[50%] bg-[#a07253] p-2 text-white"></i>
                  <p>Trainer</p>
                </div>
                <div className={`fifth flex justify-center items-center ${style.list}`}>
                  <i className="fa-solid fa-check mr-1 border rounded-b-[50%] bg-[#a07253] p-2 text-white"></i>
                  <p>Stables</p>
                </div>
                <div className={`sixth flex justify-center items-center ${style.list}`}>
                  <i className="fa-solid fa-check mr-1 border rounded-b-[50%] bg-[#a07253] p-2 text-white"></i>
                  <p>grooming</p>
                </div>
                <div className={`seventh flex justify-center items-center ${style.list}`}>
                  <i className="fa-solid fa-check mr-1 border rounded-b-[50%] bg-[#a07253] p-2 text-white"></i>
                  <p>Contests</p>
                </div>
                <div className={`eight flex justify-center items-center ${style.list}`}>
                  <i className="fa-solid fa-check mr-1 border rounded-b-[50%] bg-[#a07253] p-2 text-white"></i>
                  <p>classes</p>
                </div>

              </div>

            </div>

            <div className="right md:w-1/2 w-full">
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <img src={img1} alt="" />
                  </div>
                  <div>
                    <img src={img2} alt="" />
                  </div>
                  <div>
                    <img src={img3} alt="" />
                  </div>

                </Slider>
              </div>




            </div>

          </div>



          <div className="flex md:flex-row items-center justify-center flex-col w-4/5 mx-auto py-12 my-6 ">
            <p className={`text-[#191c44] ${style.header} w-3/5 text-center`}>If anybody expects to calm a horse down by tiring him out with riding swiftly and far, his supposition is the reverse of the truth.</p>
          </div>

          {/* experts */}

          <div className='expert w-full h-[80vh] relative' style={{ backgroundImage: `url(${experts})` }}>
            <p className={`text-white font-medium absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 ${style.ourExperts}`}>Our Expert Trainers</p>

          </div>

          {/* teams */}

          <div className="teams bg-[#fdf2ec] w-full mx-auto ">
            <div className="flex flex-col md:flex-row w-4/5 mx-auto justify-center items-center gap-4 py-8 relative md:mt-[-5%]">
              <div className={`firstTeam border rounded-b-[50%] bg-white px-6 pb-12 transition duration-300 hover:shadow-md ${style.team}`}>
                <div className='relative'>
                  <img src={team1} alt="team1-image" className="w-[300px] h-[360px] rounded-sm object-contain py-3" />
                  <div className="icons absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className={`firstIcon  hover:bg-[#191c44] hover:text-white duration-500 transition-all bg-white  relative ${style.icon}`}>
                      <i className={` fa-brands text-center fa-facebook-f text-xl p-2  rounded-md w-10 h-10 flex justify-center items-center`}></i>
                      <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                        <p>Facebook</p>
                      </div>
                    </div>
                    <div className={`secondIcone  hover:bg-[#191c44] hover:text-white duration-500 transition-all bg-white  relative ${style.icon}`}>
                      <i className={` fa-brands text-center fa-instagram text-xl p-2  rounded-md w-10 h-10 flex justify-center items-center`}></i>
                      <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                        <p>Instagram</p>
                      </div>
                    </div>
                    <div className={`thirdIcon  hover:bg-[#191c44] hover:text-white duration-500 transition-all bg-white  relative ${style.icon}`}>
                      <i className={` fa-brands text-center fa-x-twitter text-xl p-2  rounded-md w-10 h-10 flex justify-center items-center`}></i>
                      <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                        <p>Twitter</p>
                      </div>
                    </div>


                  </div>
                </div>
                <div className="text-center mt-2">
                  <p className={`${style.teamName} font-semibold my-1`}>Jennifer Smith</p>
                  <p className={`${style.job}`}>Horse Trainer</p>
                </div>
              </div>
              <div className={`secondTeam border rounded-b-[50%] bg-white px-6 pb-12 transition duration-300 hover:shadow-md ${style.team}`}>
                <div className='relative'>
                  <img src={team2} alt="team1-image" className="w-[300px] h-[360px] rounded-sm object-contain py-3" />                  <div className="icons absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className={`firstIcon  hover:bg-[#191c44] hover:text-white duration-500 transition-all bg-white  relative ${style.icon}`}>
                      <i className={` fa-brands text-center fa-facebook-f text-xl p-2  rounded-md w-10 h-10 flex justify-center items-center`}></i>
                      <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                        <p>Facebook</p>
                      </div>
                    </div>
                    <div className={`secondIcone  hover:bg-[#191c44] hover:text-white duration-500 transition-all bg-white  relative ${style.icon}`}>
                      <i className={` fa-brands text-center fa-instagram text-xl p-2  rounded-md w-10 h-10 flex justify-center items-center`}></i>
                      <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                        <p>Instagram</p>
                      </div>
                    </div>
                    <div className={`thirdIcon  hover:bg-[#191c44] hover:text-white duration-500 transition-all bg-white  relative ${style.icon}`}>
                      <i className={` fa-brands text-center fa-linkedin-in text-xl p-2  rounded-md w-10 h-10 flex justify-center items-center`}></i>
                      <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                        <p>Linkdin</p>
                      </div>
                    </div>


                  </div>
                </div>
                <div className="text-center mt-2">
                  <p className={`${style.teamName} font-semibold my-1`}>Amanda Anderson</p>
                  <p className={`${style.job}`}>Riding Instructor</p>
                </div>
              </div>
              <div className={`thirdTeam border rounded-b-[50%] bg-white px-6 pb-12 transition duration-300 hover:shadow-md ${style.team}`}>
                <div className='relative'>
                  <img src={team3} alt="team1-image" className="w-[300px] h-[360px] rounded-sm object-contain py-3" />                  <div className="icons absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className={`firstIcon  hover:bg-[#191c44] hover:text-white duration-500 transition-all bg-white  relative ${style.icon}`}>
                      <i className={` fa-brands text-center fa-facebook-f text-xl p-2  rounded-md w-10 h-10 flex justify-center items-center`}></i>
                      <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                        <p>Facebook</p>
                      </div>
                    </div>
                    <div className={`secondIcone  hover:bg-[#191c44] hover:text-white duration-500 transition-all bg-white  relative ${style.icon}`}>
                      <i className={` fa-brands text-center fa-instagram text-xl p-2  rounded-md w-10 h-10 flex justify-center items-center`}></i>
                      <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                        <p>Instagram</p>
                      </div>
                    </div>
                    <div className={`thirdIcon  hover:bg-[#191c44] hover:text-white duration-500 transition-all bg-white  relative ${style.icon}`}>
                      <i className={` fa-brands text-center fa-x-twitter text-xl p-2  rounded-md w-10 h-10 flex justify-center items-center`}></i>
                      <div className={`title absolute top-[-100%] left-1/2 -translate-x-1/2  bg-[#191c44] text-white text-center p-1 rounded-md  ${style.title}`}>
                        <p>Twitter</p>
                      </div>
                    </div>


                  </div>
                </div>
                <div className="text-center mt-2">
                  <p className={`${style.teamName} font-semibold my-1`}>Melani Brown</p>
                  <p className={`${style.job}`}>Exercise Rider</p>
                </div>
              </div>



            </div>


            {/* Newsletter */}
            <div className="flex flex-col justify-center items-center">
              <p className={`${style.newsletter} text-[#191c44]  font-medium`}>Newsletter</p>
              <p className={`${style.describtionOfNewsletter} py-3`}>Subscribe to our mailing list and always get updated from our events and sermons.</p>

              <div className="flex items-center justify-center md:flex-row flex-col md:gap-0 gap-3  mx-auto">
                <div className='bg-white p-2 border rounded-l-[50%]'>
                  <img src={newsletter} alt="newsletter-image" className=' border rounded-l-[50%] w-[600px] h-[365px]' />
                </div>
                <div className="legs relative md:ml-[-10%] w-full h-auto relative rounded-md" style={{ backgroundImage: `url(${legs})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '300px' }}>
                  <form className='text-white rounded-sm flex bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all' >
                    <div>
                      <label htmlFor="email"></label>
                      <input type="text" id='email' name='email' placeholder='Email Adress' className='border-none outline-none bg-white rounded-md text-black p-2' required />
                    </div>
                    <button className='p-2 rounded-sm bg-[#191c44]' type='submit' onClick={window.scrollTo(0, 0)}>join </button>
                  </form>
                </div>


              </div>
            </div>






          </div>



          {/* counter */}

          {/* <div className='w-full my-8 h-[80vh] relative' style={{ backgroundImage: `url(${counterBackground})`, backgroundSize: '100% 100%', objectFit: 'cover' }}>

            <div className="p-2 bg-[#fdf2ec] flex flex-col items-center justify-center w-4/5 mx-auto absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className={`${style.results} text-[#191c44]`}>Our Results</p>
              <p className={`${style.describtionOfResults}`}>After 25 years of experience in the horse riding industry our results are:</p>

            </div>


            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-4/5 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={`firstCounter hover:bg-white group transition-all duration-200 px-8  relative ${style.counter}`}>
                <p className={`text-white p-4 group-hover:text-[#191c44] transition duration-200 ${style.SideOfCounter}`}><span className={`${style.number} group-hover:text-[#191c44] transition duration-200 text-[#a07253]`}>8</span>K</p>

                <div className='bg-white p-2 absolute bottom-[-25%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition '>
                  <div className='bg-[#a07253] p-1 transition duration-200'>
                    <p className={`text-white ${style.job}`}>Membership</p>
                  </div>

                </div>
              </div>
              <div className={`secondCounter hover:bg-white group transition-all duration-200 px-8  relative ${style.counter}`}>
                <p className={`text-white p-4 group-hover:text-[#191c44] transition duration-200 ${style.SideOfCounter}`}><span className={`${style.number} group-hover:text-[#191c44] transition duration-200 text-[#a07253]`}>27</span>+</p>

                <div className='bg-white p-2 absolute bottom-[-25%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition '>
                  <div className='bg-[#a07253] p-1 transition duration-200'>
                    <p className={`text-white ${style.job}`}>Instructors</p>
                  </div>

                </div>
              </div>
              <div className={`thirdCounter hover:bg-white group transition-all duration-200 px-8  relative ${style.counter}`}>
                <p className={`text-white p-4 group-hover:text-[#191c44] transition duration-200 ${style.SideOfCounter}`}><span className={`${style.number} group-hover:text-[#191c44] transition duration-200 text-[#a07253]`}>50</span>+</p>

                <div className='bg-white p-2 absolute bottom-[-25%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition '>
                  <div className='bg-[#a07253] p-1 transition duration-200'>
                    <p className={`text-white ${style.job}`}>Awards</p>
                  </div>

                </div>
              </div>
              <div className={`fourthCounter hover:bg-white group transition-all duration-200 px-8  relative ${style.counter}`}>
                <p className={`text-white p-4 group-hover:text-[#191c44] transition duration-200 ${style.SideOfCounter}`}><span className={`${style.number} group-hover:text-[#191c44] transition duration-200 text-[#a07253]`}>90</span></p>

                <div className='bg-white p-2 absolute bottom-[-25%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition '>
                  <div className='bg-[#a07253] p-1 transition duration-200'>
                    <p className={`text-white ${style.job}`}>Events</p>
                  </div>

                </div>
              </div>
            </div>
          </div> */}


          {/* <div className="flex flex-col my-8 md:flex-row justify-center items-center gap-4 w-full mx-auto h-screen relative" style={{ backgroundImage: `url(${counterBackground})`, backgroundSize: '100% 100%', objectFit: 'cover' }}>
            <div className="p-2 bg-[#fdf2ec] flex flex-col items-center justify-center w-4/5 mx-auto absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className={`${style.results} text-[#191c44]`}>Our Results</p>
              <p className={`${style.describtionOfResults}`}>After 25 years of experience in the horse riding industry our results are:</p>

            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-4/5 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

              <div className={`firstCounter hover:bg-white group transition-all duration-200 px-8 relative w-full md:w-[200px] ${style.counter}`}>
                <p className={`text-white p-4 group-hover:text-[#191c44] transition duration-200 ${style.SideOfCounter}`}>
                  <span className={`${style.number} group-hover:text-[#191c44] transition duration-200 text-[#a07253]`}>8</span>K
                </p>
                <div className='bg-white p-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
                  <div className='bg-[#a07253] p-1 transition duration-200'>
                    <p className={`text-white ${style.job}`}>Membership</p>
                  </div>
                </div>
              </div>

              <div className={`secondCounter hover:bg-white group transition-all duration-200 px-8 relative w-full md:w-[200px] ${style.counter}`}>
                <p className={`text-white p-4 group-hover:text-[#191c44] transition duration-200 ${style.SideOfCounter}`}>
                  <span className={`${style.number} group-hover:text-[#191c44] transition duration-200 text-[#a07253]`}>27</span>+
                </p>
                <div className='bg-white p-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
                  <div className='bg-[#a07253] p-1 transition duration-200'>
                    <p className={`text-white ${style.job}`}>Instructors</p>
                  </div>
                </div>
              </div>

              <div className={`thirdCounter hover:bg-white group transition-all duration-200 px-8 relative w-full md:w-[200px] ${style.counter}`}>
                <p className={`text-white p-4 group-hover:text-[#191c44] transition duration-200 ${style.SideOfCounter}`}>
                  <span className={`${style.number} group-hover:text-[#191c44] transition duration-200 text-[#a07253]`}>50</span>+
                </p>
                <div className='bg-white p-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
                  <div className='bg-[#a07253] p-1 transition duration-200'>
                    <p className={`text-white ${style.job}`}>Awards</p>
                  </div>
                </div>
              </div>

              <div className={`fourthCounter hover:bg-white group transition-all duration-200 px-8 relative w-full md:w-[200px] ${style.counter}`}>
                <p className={`text-white p-4 group-hover:text-[#191c44] transition duration-200 ${style.SideOfCounter}`}>
                  <span className={`${style.number} group-hover:text-[#191c44] transition duration-200 text-[#a07253]`}>90</span>
                </p>
                <div className='bg-white p-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
                  <div className='bg-[#a07253] p-1 transition duration-200'>
                    <p className={`text-white ${style.job}`}>Events</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}





        </div>
      </section>


    </>
  )
}

