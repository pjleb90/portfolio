'use client';
import React, { useState } from "react";
import Image from "next/image";
import Confetti from 'react-confetti'
import { AiFillCloseCircle } from "react-icons/ai";

  const About = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);

    const handleLinkClick = () => {
        setShowImageModal(true);
        setShowConfetti(true);
    };

    const closeImageModal = () => {
      setShowImageModal(false);
      setShowConfetti(false);
    };

  return (
    <div className="text-center p-10 md:px-20">
      <h1 className="mb-4 text-center text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-900 dark:text-teal-500">About Me</h1>
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-75 h-75 mt-10 mb-10 overflow-hidden md:h-96 md:w-96'>
        <Image
            src="/images/round.png"
            alt="a picture of the author"
            width={500}
            height={500}
            priority={true}
        />
      </div>
      <p className='text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl xl:text-xl'>
        During my classes for data analytics, I discovered that I was most engaged when learning <span className="dark:text-teal-500">R</span> and <span className="dark:text-teal-500">SQL</span>.
        As much as I enjoyed working with data to gain business insights and create visualizations with <span className="dark:text-teal-500">Tableau</span>, writing code to plot data in <span className="dark:text-teal-500">RStudio </span>
        or querying large databases with structured query language made me feel like I was hacker
        in a movie.
      </p>
      <p className='text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl xl:text-xl'>
        I knew then that I wanted a career revolving around coding and signed up for a entry level <span className="dark:text-teal-500">Python </span>
        program offered by the University of Michigan. I was immediately hooked.
        I jumped into the never-ending rabbit hole of learning software engineering
        and did a follow up course focused on building web applications with <span className="dark:text-teal-500">Python </span> and <span className="dark:text-teal-500">Django</span>.
      </p>
      <div className="py-10">
        <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-teal-500">Where I am now</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                  After seeing the industry start to lean heavily towards component based web development with <span className="dark:text-teal-500">React</span>,
                  I signed up for a front-end developer course specializing in <span className="dark:text-teal-500">HTML, CSS, Javascript </span> and <span className="dark:text-teal-500">JSX</span> and I&#39;ve really been
                  blown away by how powerful and versatile it is. I love how you never stop learning in this industry and am really
                  excited to be a part of it.
                </p>
            </div>
        </section>
      </div>
      <p className='text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl xl:text-xl'>
        When I&#39;m not working I can be found hanging out with my husky
        <span id="hidden-link" onClick={handleLinkClick} className="dark:text-teal-500"> Ginkgo</span>, working on a side project, reading,
        playing guitar, a good video game, baseball or soccer.
      </p>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 2 }}
        />
      )}
      {showImageModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900 bg-opacity-80 z-1">
          <div className="bg-gray-900 dark:bg-teal-500 p-4 rounded-xl relative z-2">
            <button className="absolute top-2 right-2 text-black" onClick={closeImageModal}>
              <AiFillCloseCircle className="width: w-8 height: h-8 text-teal-500"/>
            </button>
            <Image
              src="/images/Gink.jpeg"
              alt="a picture of Ginkgo"
              width={500}
              height={500}
            />
          </div>
        </div>
      )}
    </div>
  );
}



export default About;