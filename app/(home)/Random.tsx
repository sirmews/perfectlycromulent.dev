'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { Cursor, Hero, StyledLink, SubHero } from '../components/index'
import { useState } from "react";

export default function Random() {

  const [position, setPosition] = useState({ top: 50, left: 50 });

  const handleMouseOver = () => {
    const maxX = window.innerWidth - 100; // Assuming the button's width is 100px
    const maxY = window.innerHeight - 50; // Assuming the button's height is 50px
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    setPosition({ top: randomY, left: randomX });
  };
  
  return (
        <SubHero>
          <ul className='space-y-4 mt-2'>
            <li>
              <Link className='border-b-4 cursor-pointer hover:bg-simpsons-yellow hover:text-gray-900' href='mailto:woofmew@protonmail.com' style={{ position: 'absolute', top: `${position.top}px`, left: `${position.left}px`, transition: 'top 0.3s, left 0.3s' }}
        onMouseOver={handleMouseOver}>Click here</Link>
            </li>
          </ul>
        </SubHero>
  )
}
