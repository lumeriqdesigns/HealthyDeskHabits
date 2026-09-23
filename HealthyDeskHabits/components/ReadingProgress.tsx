'use client';
import {useEffect,useState} from 'react';
export default function ReadingProgress(){const [p,setP]=useState(0);useEffect(()=>{const on=()=>{const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;setP(max>0?(h.scrollTop/max)*100:0)};window.addEventListener('scroll',on,{passive:true});on();return()=>window.removeEventListener('scroll',on)},[]);return <div aria-hidden="true" className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent"><div className="h-full bg-[var(--sage)] transition-[width] duration-100" style={{width:`${p}%`}}/></div>}
