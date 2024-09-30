import React, { useEffect } from 'react';
import style from './Blog.module.css'

export default function Blog() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <>
    <h1>Blog</h1>
      
    </>
  )
}
