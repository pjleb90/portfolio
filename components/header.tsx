'use client';

import { useState, useEffect } from 'react';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle
} from "react-icons/ai"
import TypewriterComponent from "typewriter-effect";

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
    return (
        <section>
          <div className='text-center p-10'>
            <h2 className='text-4xl py-2 text-center font-extrabold tracking-tight leading-none md:text-6xl xl:text-6xl mx-auto text-gray-600 dark:text-teal-500'>PJ LeBlanc</h2>
            <h3 className='text-2xl py-2 font-medium md:text-3xl text-teal-600 dark:text-teal-500'>Developer and Designer</h3>
            <div className='text-md py-5 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white bg-clip-text'>
              {isClient &&
                <TypewriterComponent
                  options={{
                    strings: [
                      "A freelancer providing services for web design and development. Looking forward to hearing from you!"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 500000
                  }}
                />
              }
            </div>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 pb-8 text-gray-600 dark:text-teal-500'>
            <a href="https://www.linkedin.com/in/pjleblanc90/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/pjleb90/" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://twitter.com/pjleb90/" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle />
            </a>
          </div>
        </section>
      );
}

export default Header;