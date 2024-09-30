
import React, { useState } from 'react';
import style from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png';
import { div } from 'framer-motion/client';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className='text-[#191c45] fixed flex md:justify-around justify-between inset-x-0 top-0 z-30 md:px-2 px-5 bg-[#fdf2ec]'>

        <div className="logo flex justify-between gap-2 items-center">
          <img src={logo} alt="logo" className='w-[80px] h-[50px] ' />
          <div className={`title  font-semibold ${style.title} flex flex-col justify-center items-center`}>
          </div>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white md:hidden bg-[#191c45] rounded-[50%] m-2 p-1'>
          <i className={`fas ${isMenuOpen ? 'fa-times ' : 'fa-bars text-sm text-center  font-medium rounded-md'}`}></i>
        </button>
        <ul
          className={` h-1/2 text-[#191c45] my-auto flex flex-col md:flex-row gap-x-1 md:gap-3 items-center fixed md:relative top-14 md:top-0 right-0 w-2/4 md:w-auto transition-all 
            ${isMenuOpen ? 'translate-x-0 duration-1000 bg-[#a07253] h-screen gap-2 ' : 'translate-x-[100%] duration-300'} md:translate-x-0`}
        >
          <NavLink
            to={'/'} className={` transition-all duration-100 ease-in-out ${style.listItem} ${isMenuOpen && 'w-full text-center hover:bg-white py-1 hover:text-[#a07253] transition duration-200'}`}
          >
            <div className="">
              <span>Home</span>
            </div>
          </NavLink>
          <NavLink
            to={'about'} className={` transition-all duration-100 ease-in-out ${style.listItem} ${isMenuOpen && 'w-full text-center hover:bg-white py-1 hover:text-[#a07253] transition duration-200'}`}
          >
            <div className="">
              <span>About Us</span>
            </div>
          </NavLink>
          <NavLink
            to={'services'} className={` transition-all duration-100 ease-in-out ${style.listItem} ${isMenuOpen && 'w-full text-center hover:bg-white py-1 hover:text-[#a07253] transition duration-200'}`}
          >
            <div className="">
              <span>Services</span>
            </div>
          </NavLink>
          <NavLink
            to={'gallery'} className={` transition-all duration-100 ease-in-out ${style.listItem} ${isMenuOpen && 'w-full text-center hover:bg-white py-1 hover:text-[#a07253] transition duration-200'} `}
          >
            <div className="">
              <span>Gallery</span>
            </div>
          </NavLink>
          <NavLink
            to={'shop'} className={` transition-all duration-100 ease-in-out ${style.listItem} ${isMenuOpen && 'w-full text-center hover:bg-white py-1 hover:text-[#a07253] transition duration-200'}`}
          >
            <div className="">
              <span>Shop</span>
            </div>
          </NavLink>
          <NavLink
            className={` transition-all duration-100 ease-in-out ${style.listItem} ${isMenuOpen && 'w-full text-center hover:bg-white py-1 hover:text-[#a07253] transition duration-200'}`}
          >
            <div className={`relative ${style.pages}`}>
              <span>Pages <i className="cz_indicator fa fa-angle-down"></i></span>

              <div className={isMenuOpen ? 'hidden' : 'absolute py-2 pr-14 border border-[#a07253]  hidden transition-all  '}>
                <p to={'faq'} className='hover:border-l border-[#a07253] '><Link to={'faq'}> FAQ</Link></p>
                <p to={'blog'} className='hover:border-l border-[#a07253]'><Link to={'blog'}> Blog</Link></p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to={'contact'} className={` transition-all duration-100 ease-in-out ${style.listItem} ${isMenuOpen && 'w-full text-center hover:bg-white py-1 hover:text-[#a07253] transition duration-200'}`}
          >
            <div className="">
              <span>Contact</span>
            </div>
          </NavLink>


          {isMenuOpen &&
            <div className='absolute bottom-24  '>
              <div className='flex justify-center items-center gap-3'>
                <Link to={`https://github.com/MennaSayed46`} target='_blank'>
                  <i className="fa-brands fa-github text-xl bg-white text-[#191c44] p-3 rounded-md transition duration-200 hover:bg-[#191c44] hover:text-white "></i>
                </Link>
                <Link to={`https://www.linkedin.com/in/menna-abdelateef-04a0a42b2/`} target='_blank'>
                  <i className="fa-brands fa-linkedin-in text-xl bg-white text-[#191c44] p-3 rounded-md transition duration-200 hover:bg-[#191c44] hover:text-white "></i>
                </Link>
                
                  <i className="fa-brands fa-twitter text-xl bg-white text-[#191c44] p-3 rounded-md transition duration-200 hover:bg-[#191c44] hover:text-white "></i>
               
              </div>
            </div>

          }
        </ul>
        <button className={`flex justify-center items-center  px-2 my-2 py-0 ${style.btn} md:block hidden `} >
          <Link to={'services'} >
            <div className='flex justify-centerborder-solid border border-[#a07253] items-center    '>
              <div className={`${style.rightSide}`}>
                <p className=' px-2 '>Join our club</p>
              </div>
              <div className={`left-side border-l border-solid border-[#a07253] ${style.leftSide}`}>
                <i className="fas fa-horse-head cz_btn_header_icon_after px-2 "></i>
              </div>
            </div>
          </Link>
        </button>
      </nav >
    </>
  );
}
