'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { Cursor, Hero, StyledLink, SubHero } from '../components/index'
import { useState, useEffect } from "react";

export default function Random() {

  const [position, setPosition] = useState({ bottom: 50, left: 50 });
  const [text, setText] = useState('Click here to contact me');

  const randomText = ['Click here', 'no, here', 'its easy just contact me', 'why wont you click', 'your loss', 'hai, im here']

  const handleMouseOver = () => {
    const maxX = window.innerWidth - 100; // Assuming the button's width is 100px
    const maxY = window.innerHeight - 50; // Assuming the button's height is 50px
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setPosition({ bottom: randomY, left: randomX });
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * 5)
    setText(randomText[random])
  }, [position]);
  
  return (
        <SubHero>
          <ul className='space-y-4 mt-2'>
            <li>
              <Link className='border-b-4 cursor-pointer bg-simpsons-yellow text-gray-900' href='mailto:woofmew@protonmail.com' style={{ position: 'absolute', bottom: `${position.top}px`, left: `${position.left}px`, transition: 'top 0.3s, left 0.3s' }}
        onMouseOver={handleMouseOver}>{text}</Link>
            </li>
          </ul>
        </SubHero>
  )
}
