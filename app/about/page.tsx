'use client';

import Image from "next/image";

const About = () => {
  const handleLinkClick = () => {
    window.open('https://www.retrogames.cz/play_1030-NES.php', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="text-center p-10">
      <h3 className='text-center text-4xl py-2 text-teal-600 font-medium md:text-6xl'>About me</h3>
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
        During my classes for data analytics, I discovered that I was most engaged when learning <span className="text-teal-500">R</span> and <span className="text-teal-500">SQL</span>.
        As much as I enjoyed working with data to gain business insights and create visualizations with <span className="text-teal-500">Tableau</span>, writing code to plot data in <span className="text-teal-500">RStudio </span>
        or querying large databases with structured query language made me feel like I was hacker
        in a movie.
      </p>
      <p className='text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl xl:text-xl'>
        I knew then that I wanted a career revolving around coding and signed up for a entry level <span className="text-teal-500">Python </span>
        program offered by the University of Michigan. I was immediately hooked.
        I jumped into the never-ending rabbit hole of learning software engineering
        and did a follow up course focused on building web applications with <span className="text-teal-500">Python </span> and <span className="text-teal-500">Django</span>.
        After seeing the industry start to lean heavily towards component based web development with <span className="text-teal-500">React</span>,
        I signed up for a front-end developer course focused on <span className="text-teal-500">Javascript </span> and <span className="text-teal-500">JSX</span> and have really been
        blown away by how powerful and versatile it is. I love how you never stop learning in this industry and am really
        excited to be a part of it.
      </p>
      <p className='text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl xl:text-xl'>
        When I&#39;m not working I can be found hanging out with my husky Ginkgo, working on my websites, reading,
        playing guitar, a good <span id="hidden-link" onClick={handleLinkClick}> video game</span>, baseball or soccer.
      </p>
    </div>
  );
}



export default About;