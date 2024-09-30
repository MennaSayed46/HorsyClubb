import React, { useEffect } from 'react';
import style from './Services.module.css'
import { Link } from 'react-router-dom';
import icon1 from '/icon1.png';
import icon2 from '/icon2.png';
import icon3 from '/icon3.png';
import icon4 from '/icon4.png';
import horse from '/horseImageOfWorkingHourSection.jpg';
export default function Services() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <>
      <section className='w-full bg-[#fdf2ec]'>
        <div className="main py-12">
          <div className="flex justify-around items-center py-6 bg-[#fffdfdec] shadow-lg p-3 ">
            <p className={`text-[#191c44] font-medium ${style.about}`}>Services</p>
            <p className={`${style.aboutUs}`}><Link to={'/'}><i className="text-sm text-[#191c44bf] fa-solid fa-house mr-1"></i></Link><i className="mr-1 text-sm fa-solid fa-greater-than text-[#191c44bf]"></i> Services </p>
          </div>

          {/* teams */}

          <div className="flex flex-col justify-center items-center py-12  ">
            <p className={`text-[#a07253] ${style.services} mt-4`}>Our Services</p>
            <p className={`${style.offer} font-medium text-[#191c44] mb-4`}>What We Offer</p>

            <div className="flex flex-col md:flex-row justify-center items-center w-4/5 mx-auto gap-4 py-12">

              <div className={`firstTeam border rounded-b-[50%] bg-white p-2 transition duration-300 hover:shadow-md ${style.team} group w-[280px] h-[320px] hover:scale-105 hover:shadow-lg `}>
                <div className='bg-[#fdf2ec] transition-all group-hover:bg-white group-hover:border-white  duration-100  p-1 w-full h-full flex flex-col justify-center  items-center border rounded-b-[50%] pb-4'>
                  <div className='relative'>
                    <img src={icon1} alt="team1-image" className="rounded-sm object-contain w-[80px] h-[80px] mx-auto transition-all duration-100" />
                  </div>
                  <div className="text-center mt-2">
                    <p className={`font-semibold my-1`}>Contest Training</p>
                    <p className={`text-sm text-gray-600 `}>Equestrianism, commonly known as horse riding or horseback riding</p>
                  </div>
                </div>
              </div>


              <div className={`secondTeam border rounded-b-[50%] bg-white p-2 transition duration-300 hover:shadow-md ${style.team} group w-[280px] h-[320px] hover:scale-105 hover:shadow-lg `}>
                <div className='bg-[#fdf2ec] transition-all group-hover:bg-white group-hover:border-white  duration-100  p-1 w-full h-full flex flex-col justify-center  items-center border rounded-b-[50%] pb-4'>
                  <div className='relative'>
                    <img src={icon2} alt="team2-image" className="rounded-sm object-contain w-[80px] h-[80px] mx-auto transition-all duration-100" />
                  </div>
                  <div className="text-center mt-2">
                    <p className={`font-semibold my-1`}>Equestry Apparel</p>
                    <p className={`text-sm text-gray-600 `}>Equestrianism, commonly known as horse riding or horseback riding</p>
                  </div>
                </div>
              </div>


              <div className={`thirdTeam border rounded-b-[50%] bg-white p-2 transition duration-300 hover:shadow-md ${style.team} group w-[280px] h-[320px] hover:scale-105 hover:shadow-lg `}>
                <div className='bg-[#fdf2ec] transition-all group-hover:bg-white group-hover:border-white  duration-100  p-1 w-full h-full flex flex-col justify-center  items-center border rounded-b-[50%] pb-4'>
                  <div className='relative'>
                    <img src={icon3} alt="team3-image" className="rounded-sm object-contain w-[80px] h-[80px] mx-auto transition-all duration-100" />
                  </div>
                  <div className="text-center mt-2">
                    <p className={`font-semibold my-1`}>Grooming Services</p>
                    <p className={`text-sm text-gray-600 `}>Equestrianism, commonly known as horse riding or horseback riding</p>
                  </div>
                </div>
              </div>


              <div className={`fourthTeam border rounded-b-[50%] bg-white p-2 transition duration-300 hover:shadow-md ${style.team} group w-[280px] h-[320px] hover:scale-105 hover:shadow-lg `}>
                <div className='bg-[#fdf2ec] transition-all group-hover:bg-white group-hover:border-white  duration-100  p-1 w-full h-full flex flex-col justify-center  items-center border rounded-b-[50%] pb-4'>
                  <div className='relative'>
                    <img src={icon4} alt="team4-image" className="rounded-sm object-contain w-[80px] h-[80px] mx-auto transition-all duration-100" />
                  </div>
                  <div className="text-center mt-2">
                    <p className={`font-semibold my-1`}>Riding Equipment</p>
                    <p className={`text-sm text-gray-600 `}>Equestrianism, commonly known as horse riding or horseback riding</p>
                  </div>
                </div>
              </div>




            </div>

          </div>


          {/* working hours */}

          <div className="flex flex-col justify-center items-center w-4/5 mx-auto py-12">
            <p className={`text-[#a07253] ${style.services} mt-4`}>Our Working Hours</p>
            <p className={`${style.offer} font-medium text-[#191c44] mb-4`}>We are open everyday</p>

            <div className="flex justify-between w-4/5 mx-auto items-center mx-auto md:flex-row flex-col gap-6">

              <div className="left w-full bg-white p-3 border rounded-l-[50%] ">
                <img src={horse} alt="horse-image" className=' border rounded-l-[50%]' />
              </div>


              {/* menu */}
              <div className="right flex flex-col justify-around  items-center w-full">
                <div className="item flex flex-row justify-between items-center gap-6 w-full ">
                  <p className={`${style.day} font-bold text-[#191c44]`}>Sunday</p>
                  <p className={`px-2 py-[10px] bg-white border rounded-r-[100px]  mt-1 text-sm text-[#191c44]  ${style.hour}`}>9:00 to 22:00</p>
                </div>
                <div className="item flex flex-row justify-between items-center gap-6 w-full ">
                  <p className={`${style.day} font-bold text-[#191c44]`}>Saturday</p>
                  <p className={`px-2 py-[10px] bg-white border rounded-r-[100px]  mt-1 text-sm text-[#191c44]  ${style.hour}`}>9:00 to 22:00</p>
                </div>
                <div className="item flex flex-row justify-between items-center gap-6 w-full ">
                  <p  className={`${style.day} font-bold text-[#191c44]`}>Monday</p>
                  <p className={`px-2 py-[10px] bg-white border rounded-r-[100px]  mt-1 text-sm text-[#191c44]  ${style.hour}`}>9:00 to 17:00</p>
                </div>
                <div className="item flex flex-row justify-between items-center gap-6 w-full ">
                  <p  className={`${style.day} font-bold text-[#191c44]`}>Tuesday</p>
                  <p className={`px-2 py-[10px] bg-white border rounded-r-[100px]  mt-1 text-sm text-[#191c44]  ${style.hour}`}>9:00 to 22:00</p>
                </div>
                <div className="item flex flex-row justify-between items-center gap-6 w-full ">
                  <p  className={`${style.day} font-bold text-[#191c44]`}>Wednesday</p>
                  <p className={`px-2 py-[10px] bg-white border rounded-r-[100px]  mt-1 text-sm text-[#191c44]  ${style.hour}`}>9:00 to 17:00</p>
                </div>
                <div className="item flex flex-row justify-between items-center gap-6 w-full ">
                  <p  className={`${style.day} font-bold text-[#191c44]`}>Thursday</p>
                  <p className={`px-2 py-[10px] bg-white border rounded-r-[100px]  mt-1 text-sm text-[#191c44]  ${style.hour}`}>9:00 to 22:00</p>
                </div>
                <div className="item flex flex-row justify-between items-center gap-6 w-full ">
                  <p  className={`${style.day} font-bold text-[#191c44]`}>Friday</p>
                  <p className={`px-2 py-[10px] bg-white border rounded-r-[100px]  mt-1 text-sm text-[#191c44]  ${style.hour}`}>9:00 to 17:00</p>
                </div>

              </div>

            </div>

          </div>


          {/* course */}
          <section className='courses bg-[#fdf2ec] py-10'>
            <div className="main flex flex-col justify-center items-center mx-auto w-4/5">
              <p className={`${style.courses} font-medium text-[#191c44] text-center`}>Our Courses</p>
              <p className={`${style.detailsOfCourses} p-4 text-center mb-6`}>Horsey club is British Horse Society approved and offers
                horse riding lessons for beginners</p>

              <div className="flex md:flex-row flex-col my-6 gap-6">
                <div className="firstCourse my-8 relative flex flex-col justify-center items-center bg-white  rounded-b-[50%] p-10">
                  <p className={`${style.title} text-[<i class="fa-solid fa-arrow-right"></i>] my-2`} >Beginners</p>
                  <div className={`flex flex-col items-start ${style.detailsOfCourses}  p-4`}>
                    <p><i className="fa-regular fa-square-check mr-4 text-[#a07253]"></i>Private Course</p>
                    <p><i className="fa-regular fa-square-check mr-4 text-[#a07253]"></i>Rides in the park</p>
                    <p><i className="fa-regular fa-square-check mr-4 text-[#a07253]"></i>Lesson Rides</p>
                    <p><i className="fa-regular fa-square-check mr-4 text-[#a07253]"></i>Adults and Children</p>
                  </div>

                  <div className=' bg-[#a07253] absolute top-0 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 p-4 rounded-t-[50%] text-white  '>
                    <p>$ <span className={`${style.number} text-xl`}>59</span></p>
                  </div>

                  <div className='absolute bottom-[-35px] left-1/2 -translate-x-1/2 -translate-y-1/2 transition p-2 rounded-md bg-[#a07253] hover:bg-[#191c44] text-white duration-300 '>
                    <Link to={'/shop'}><i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>


                <div className="secondCourse relative my-8 flex flex-col justify-center items-center bg-[#a07253] rounded-b-[50%] p-10">
                  <p className={`${style.title} text-white class="fa-solid fa-arrow-right"></>] my-2`} >Special Course</p>
                  <div className={`flex text-white flex-col items-start ${style.detailsOfCourses} p-4`}>
                    <p><i className="fa-regular fa-square-check mr-4"></i>Group Course</p>
                    <p><i className="fa-regular fa-square-check mr-4"></i>Rides in the park</p>
                    <p><i className="fa-regular fa-square-check mr-4"></i>Special Package</p>
                    <p><i className="fa-regular fa-square-check mr-4"></i>Adults and Children</p>
                  </div>

                  <div className=' bg-white absolute top-0 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 p-4 rounded-t-[50%] text-black  '>
                    <p>$ <span className={`${style.number} text-xl`}>99</span></p>
                  </div>

                  <div className='absolute bottom-[-35px] left-1/2 -translate-x-1/2 -translate-y-1/2 transition p-2 rounded-md bg-white hover:bg-[#191c44] hover:text-white text-black duration-300 '>
                    <Link to={'/shop'}><i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>




                <div className="thirdCourse relative my-8 flex flex-col justify-center items-center bg-white rounded-b-[50%] p-10">
                  <p className={`${style.title} text-[<i class="fa-solid fa-arrow-right"></i>] my-2`} >Pro Package</p>
                  <div className={`flex flex-col items-start ${style.detailsOfCourses} p-4`}>
                    <p><i className="fa-regular fa-square-check mr-4 text-[#a07253]"></i>Private Course</p>
                    <p><i className="fa-regular fa-square-check mr-4 text-[#a07253]"></i>Rides in the park</p>
                    <p><i className="fa-regular fa-square-check mr-4 text-[#a07253]"></i>Lesson Rides</p>
                    <p><i className="fa-regular fa-square-check mr-4 text-[#a07253]"></i>Adults and Children</p>
                  </div>

                  <div className=' bg-[#a07253] absolute top-0 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 p-4 rounded-t-[50%] text-white  '>
                    <p>$ <span className={`${style.number} text-xl`}>59</span></p>
                  </div>

                  <div className='absolute bottom-[-35px] left-1/2 -translate-x-1/2 -translate-y-1/2 transition p-2 rounded-md bg-[#a07253] hover:bg-[#191c44] text-white duration-300 '>
                    <Link to={'/shop'}><i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>


    </>
  )
}
