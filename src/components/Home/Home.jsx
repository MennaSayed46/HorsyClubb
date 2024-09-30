
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import style from './Home.module.css';
import lashHorse from '/lashHorse.jpg';
import girlHouse from '/girlsHouse.png';
import hero from '/Hero-Image-bg.jpg';
import horse from '/horse.jpg';
import { Link } from 'react-router-dom';
import horseImage from '/horseImage.jpg';
import horseKiss from '/horseKiss.jpg';
import firstRideImage from '/firstRideImage.jpg'
import bootsImage from '/boots.png'
import bootsImage2 from '/img9.png'
import man from '/manWithHores.jpg'
import heroWhiteBackground from '/heroWhiteBg.png'

export default function Home() {
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

  const [children, setChildren] = useState(0);
  const [experts, setExperts] = useState(0);
  const [members, setMembers] = useState(0);
  const [duration, setDuration] = useState(1000);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let childCount = 0;
      const childrenInterval = setInterval(() => {
        setChildren(childCount);
        childCount++;
        if (childCount > 24) clearInterval(childrenInterval);
      }, duration / 24);

      let expertCount = 0;
      const expertInterval = setInterval(() => {
        setExperts(expertCount);
        expertCount++;
        if (expertCount > 16) clearInterval(expertInterval);
      }, duration / 16);


      let membersCount = 0;
      const membersInterval = setInterval(() => {
        setMembers(membersCount);
        membersCount++;
        if (membersCount > 53) clearInterval(membersInterval);
      }, duration / 53);
    }
  }, [inView]);

  return (
    <>
      <div className="w-full z-10 md:h-auto py-14 h-auto bg-[#fdf2ec] flex items-center justify-around md:flex-row flex-col gap-3 overflow-hidden">
        <div
          className={`${style.rightSide} relative rightSide w-full`}
          style={{ backgroundImage: `url(${lashHorse})` }}
        >
          <div className={`flex flex-col items-center justify-center`}>
            <p className={`${style.unique} py-0 my-0 font-medium text-[#191c44]`}>Unique</p>
            <p className={`${style.unique} py-0 my-0 font-medium text-[#a07253] `}>Horse</p>
            <p className={`${style.unique} py-0 my-0 font-medium text-[#191c44]`}>Riding</p>
            <p className={`${style.unique} py-0 my-0 font-medium text-[#191c44]`}>Experience</p>
            <p className={`${style.desc} text-[#191c44] w-3/5`}>
              A private membership club organizing fantastic events and socials for adult equine enthusiasts in and around London.
            </p>
          </div>
        </div>

        <div
          className={`${style.leftSide} relative w-full z-0`}
          style={{ backgroundImage: `url(${hero})`, overflow: 'hidden' }}
        >
          <div className="flex justify-center items-center">
            <img
              src={girlHouse}
              alt="girl-house"
              style={{
                transform: `translateX(${scrollPosition * 0.5}px)`,
                transition: 'transform 0.1s ease-out',
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>

      {/* horse riding school and counter */}
      <section className="bg-white">
        <div className="flex md:flex-row flex-col justify-center items-center w-4/5 mx-auto gap-3">
          <div className="left">
            <img src={horse} alt="horse-image" className="md:relative md:mt-[-30%] mt-0" />
          </div>

          <div className="right md:relative md:mt-[-12%] mt-0">
            <div className="flex flex-row justify-center items-center gap-2 my-2">
              <p className={`text-[#191c44] ${style.greetings} font-medium`}>Welcome To Horsey Riding School</p>

              <button className="px-2 py-1 border border-1 border-[#a07253] text-[#191c44] font-medium hover:bg-[#a07253] hover:text-white transition-all duration-500 rounded-xl">
                <Link to={'about'}>View all events</Link>
              </button>
            </div>

            <div className="flex justify-center items-center gap-2">
              <div className={`rounded-xl relative ${style.item}`}>
                <img src={horseKiss} alt="horseKiss-image" className="rounded-xl" />
                <div className={`describtion relative bg-white p-4 rounded-xl md:bottom-6 bottom-2 ${style.describtion}`}>
                  <p className="absolute top-1 -translate-x-1/2 -translate-y-1/2 transition left-1/2 text-white p-2 bg-[#191c44] rounded-md">Membership</p>
                  <p className={`text-center mt-2 ${style.pricing} transition-all duration-200`}>Pricing</p>
                </div>
              </div>

              <div className={`rounded-xl relative ${style.item}`}>
                <img src={horseImage} alt="horse-image" className="rounded-xl" />
                <div className={`describtion relative bg-white p-4 rounded-xl md:bottom-6 bottom-2 ${style.describtion}`}>
                  <p className="absolute top-1 -translate-x-1/2 -translate-y-1/2 transition left-1/2 text-white p-2 bg-[#191c44] rounded-md">Ride a horse</p>
                  <p className={`text-center mt-2 ${style.pricing} transition-all duration-200`}>Booking Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* counter section */}
        <div className="counter  w-4/5 mx-auto flex justify-around items-center flex-col md:flex-row my-3 gap-3 " ref={ref}>
          <div className="firtCounter bg-[#a07253] py-3 px-8 rounded-md relative md:w-auto  w-full">
            <p className={`text-white font-bold ${style.number}`}>{children}</p>
            <p className='md:hidden block'>Children lessons</p>
            <div className="detailsshadow-sm absolute md:right-[-50%] md:block hidden p-4 bg-white text-[#191c44] font-medium">
              <p>Children</p>
              <p>lessons</p>
            </div>
          </div>
          <div className="secondCounter bg-[#a07253] py-3 px-8 rounded-md relative md:w-auto  w-full">
            <p className={`text-white font-bold ${style.number}`}>{members}</p>
            <p className='md:hidden block'>Social members</p>
            <div className="details shadow-sm absolute md:block hidden md:right-[-50%] p-4 bg-white text-[#191c44] font-medium">
              <p>Social</p>
              <p>Members</p>
            </div>
          </div>
          <div className="thirdCounter bg-[#a07253] py-3 px-8 rounded-md relative md:w-auto  w-full">
            <p className={`text-white font-bold ${style.number}`}>{experts}</p>
            <p className='md:hidden block'>Expert Riders</p>
            <div className="details shadow-sm absolute md:right-[-50%] md:block hidden p-4 bg-white text-[#191c44] font-medium">
              <p>Expert</p>
              <p>Riders</p>
            </div>
          </div>
        </div>

      </section>

      {/* first ride  */}
      <section className='bg-[#fdf2ec] w-full h-auto py-12 my-12'>

        <div className='flex justify-center items-center md:flex-row flex-col w-3/5 gap-3 mx-auto py-12 ' >

          <div className={`${style.firstRideSection} flex justify-center items-center flex-col h-auto`}>
            <p className={`${style.firstRideDetails} font-medium text-[#191c44]`}>Our First Ride Starts At 9Am And Last Ride Starts At 3Pm 7 Days A Week.</p>
            <img src={firstRideImage} alt="first-ride-image" className='my-4' />
            <div className='bg-white shadow-md p-4 rounded-sm relative  md:right-[-20%] right-0'>
              <p className='font-medium mb-3'>Social Event on Friday</p>
              <div className="calenders flex justify-between items-center gap-3 ">
                <p className={`${style.clocks}`}><i className="fa-solid fa-calendar-days mr-1 bg-[rgba(25,28,68,.69)] p-1 rounded-sm text-center text-[rgba(25,28,68,.69)]"></i> Sept 28,2024</p>
                <p className={`${style.location}`}><i className="fa-solid fa-location-dot mr-1 bg-[rgba(25,28,68,.69)] p-1 rounded-sm text-center text-[rgba(25,28,68,.69)]"></i>Egypt</p>

              </div>
              <p className={`my-2 ${style.clocks}`}>From pub hacks and beach rides to weekends away,
                there's something for every rider.</p>
              <button className='border border-[#a07253] p-2 rounded-md text-[#191c44] hover:bg-[#a07253] hover:text-white transition-all duration-500'>
                <Link to={'/contact'} className='text-center'>Book now</Link>
              </button>
              <img src={bootsImage2} alt="another boots image" className='md:absolute hidden md:block  md:bottom-[-60%] md:left-[-20%] h-[160px]' style={{
                transform: `translateX(${scrollPosition * 0.04}px)`,
                transition: 'transform 0.1s ease-out',
              }} />



            </div>

          </div>


          <div className={`${style.firstRideSection} flex justify-center items-center flex-col`}>
            <p className={`font-medium text-[#191c44] my-12`}>We ride on horses and ponies chosen for their safe temperament, catering for riders of all abilities. Previous experience is not necessary.</p>
            <div className='bg-white shadow-md p-4 rounded-sm my-12 relative md:left-[-20%] left-0'>
              <p className='font-medium mb-3'>Horsey Riding Events</p>
              <div className="calenders flex justify-between items-center gap-3 ">
                <p className={`${style.clocks}`}><i className="fa-solid fa-calendar-days mr-1 bg-[rgba(25,28,68,.69)] p-1 rounded-sm text-center text-[rgba(25,28,68,.69)]"></i> Sept 28,2024</p>
                <p className={`${style.location}`}><i className="fa-solid fa-location-dot mr-1 bg-[rgba(25,28,68,.69)] p-1 rounded-sm text-center text-[rgba(25,28,68,.69)]"></i>Egypt</p>

              </div>
              <p className={`my-2 ${style.clocks}`}>From pub hacks and beach rides to weekends away,
                there's something for every rider.</p>
              <button className='border border-[#a07253] p-2 rounded-md text-[#191c44] hover:bg-[#a07253] hover:text-white transition-all duration-500'>
                <Link to={'/contact'} className='text-center'>Book now</Link>
              </button>
              <img src={bootsImage} alt="boots-image" className='absolute top-[-50%] right-0 h-[150px] my-2' />



            </div>
            <img src={man} alt="" />

          </div>



        </div>
      </section>


      {/* our courses */}
      <section className='courses bg-white py-10'>
        <div className="main flex flex-col justify-center items-center mx-auto w-4/5">
          <p className={`${style.courses} font-medium text-[#191c44] text-center`}>Our Courses</p>
          <p className={`${style.detailsOfCourses} text-center mb-6`}>Horsey club is British Horse Society approved and offers
            horse riding lessons for beginners</p>

          <div className="flex md:flex-row flex-col my-6 gap-6">
            <div className="firstCourse my-8 relative flex flex-col justify-center items-center bg-[#fdf2ec] rounded-b-[50%] p-10">
              <p className={`${style.title} text-[<i class="fa-solid fa-arrow-right"></i>] my-2`} >Beginners</p>
              <div className={`flex flex-col items-start ${style.detailsOfCourses}`}>
                <p><i className="fa-regular fa-square-check mr-1"></i>Private Course</p>
                <p><i className="fa-regular fa-square-check mr-1"></i>Rides in the park</p>
                <p><i className="fa-regular fa-square-check mr-1"></i>Lesson Rides</p>
                <p><i className="fa-regular fa-square-check mr-1"></i>Adults and Children</p>
              </div>

              <div className=' bg-[#a07253] absolute top-0 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 p-4 rounded-t-[50%] text-white  '>
                <p>$ <span className={`${style.number} text-xl`}>59</span></p>
              </div>

              <div className='absolute bottom-[-35px] left-1/2 -translate-x-1/2 -translate-y-1/2 transition p-2 rounded-md bg-[#a07253] hover:bg-[#191c44] text-white duration-300 '>
                <Link to={'/shop'}><i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="secondCourse relative my-8 flex flex-col justify-center items-center bg-[#a07253] rounded-b-[50%] p-10">
              <p className={`${style.title} text-[<i class="fa-solid fa-arrow-right"></i>] my-2`} >Special Course</p>
              <div className={`flex flex-col items-start ${style.detailsOfCourses}`}>
                <p><i className="fa-regular fa-square-check mr-1"></i>Group Course</p>
                <p><i className="fa-regular fa-square-check mr-1"></i>Rides in the park</p>
                <p><i className="fa-regular fa-square-check mr-1"></i>Special Package</p>
                <p><i className="fa-regular fa-square-check mr-1"></i>Adults and Children</p>
              </div>

              <div className='  bg-[#fdf2ec] absolute top-0 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 p-4 rounded-t-[50%] text-black  '>
                <p>$ <span className={`${style.number} text-xl`}>99</span></p>
              </div>

              <div className='absolute bottom-[-35px] left-1/2 -translate-x-1/2 -translate-y-1/2 transition p-2 rounded-md bg-[#fdf2ec] hover:bg-[#191c44] hover:text-white text-black duration-300 '>
                <Link to={'/shop'}><i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="thirdCourse relative my-8 flex flex-col justify-center items-center bg-[#fdf2ec] rounded-b-[50%] p-10">
              <p className={`${style.title} text-[<i class="fa-solid fa-arrow-right"></i>] my-2`} >Pro Package</p>
              <div className={`flex flex-col items-start ${style.detailsOfCourses}`}>
                <p><i className="fa-regular fa-square-check mr-1"></i>Private Course</p>
                <p><i className="fa-regular fa-square-check mr-1"></i>Rides in the park</p>
                <p><i className="fa-regular fa-square-check mr-1"></i>Lesson Rides</p>
                <p><i className="fa-regular fa-square-check mr-1"></i>Adults and Children</p>
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


      {/* private membership */}

      <section className='bg-[#fdf2ec] w-full '>
        <div className="main w-4/5 mx-auto flex justify-between items-center md:flex-row flex-col pb-12">

          <div className="left  md:relative md:mt-[-30%] mt-0">
            <p className={`${style.private} font-medium text-[#191c44] mb-2`}>Private
              Membership
              Club Organizing
              Fantastic</p>
            <p className=' mb-12'>events and socials for adult equine enthusiasts in and around
              London. With quality horses, exclusive venues and
              experienced instruction, you’re guaranteed to have a
              memorable experience in this stable.</p>


            <div className=''>
              <div className="md:grid md:grid-cols-2 md:gap-6 flex flex-col items-start justify-center gap-2">
                <div className={`first flex flex-row ${style.connections} gap-1`}>
                  <div className={`icon bg-[#a07253] hover:bg-[#191c44] rounded-l-[50%] p-3 ${style.icon}`}>
                    <i className="text-white fa-regular fa-envelope"></i>
                  </div>
                  <div>
                    <p className='text-[#a07253] text-sm'>Email:</p>
                    <p className='text-[#191c44]'>mennaabdelateef910@gmail.com</p>
                  </div>
                </div>

                <div className={`second flex flex-row ${style.connections} gap-1`}>
                  <div className={`icon bg-[#a07253] hover:bg-[#191c44] rounded-l-[50%] p-3 ${style.icon}`}>
                    <i className="text-white fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className='text-[#a07253] text-sm'>Phone:</p>
                    <p className='text-[#191c44]'>+20 01119121377</p>
                  </div>
                </div>

                <div className={`third flex flex-row ${style.connections} gap-1`}>
                  <div className={`icon bg-[#a07253] hover:bg-[#191c44] rounded-l-[50%] p-3 ${style.icon}`}>
                    <i className="text-white fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className='text-[#a07253] text-sm'>Location:</p>
                    <p className='text-[#191c44]'>Egyptian Equestrian Center, Giza</p>
                  </div>
                </div>

                <div className={`fourth flex flex-row ${style.connections} gap-1`}>
                  <div className={`icon bg-[#a07253] hover:bg-[#191c44] rounded-l-[50%] p-3 ${style.icon}`}>
                    <i className="text-white fa-solid fa-qrcode"></i>
                  </div>
                  <div>
                    <p className='text-[#a07253] text-sm'>Social media :</p>
                    <p className='text-[#191c44]'>@horsy.stable</p>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className={`right md:relative md:mt-[-5%] mt-0 w-full h-screen relative flex flex-col justify-center items-center `} style={{
            backgroundImage: `url(${heroWhiteBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 90%',
            height: '100vh'
          }}>
            <p className="text-white my-4">
              Leave a message
            </p>

            <form className="flex flex-col items-center w-full max-w-xs my-8">
              <label htmlFor="name" className="sr-only"> name</label>
              <input type="text" id="name" name="name" placeholder="Your name" className="bg-white border-none outline-none text-black p-2 w-full mb-2" />

              <label htmlFor="phone" className="sr-only"> phone</label>
              <input type="text" id="phone" name="phone" placeholder="Your phone" className="bg-white border-none outline-none text-black p-2 w-full mb-2" />

              <label htmlFor="subject" className="sr-only">subject</label>
              <input type="text" id="subject" name="subject" placeholder="subject" className="bg-white border-none outline-none text-black p-2 w-full mb-2" />

              <textarea className="bg-white border-none outline-none text-black p-2 w-full mb-2" placeholder='Your Message'></textarea>

              <button   className={`btn border border-solid border-white my-4 text-white p-2 rounded-md font-meduim ${style.btn}  transition duration-300 hover:bg-white hover:text-[#a07253] font-medium  mx-auto`}>Send message</button>
            </form>
          </div>




        </div>

      </section>




    </>
  );
}
