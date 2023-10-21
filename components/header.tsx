import Image from "next/image";

import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"

const Header = () => {
    return (
        <section className='min-h-screen'>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>PJ LeBlanc</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and Designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
              Freelancer providing services for web design and development. Looking forward to hearing from you!
            </p>
          </div>
          <div className='text text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-teal-500'>
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
          {/* profile pic */}
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-75 h-75 mt-10 mb-10 overflow-hidden md:h-96 md:w-96'>
            <Image
                src="/images/round.png"
                alt="a picture of the author"
                width={500}
                height={500}
                priority={true}
            />
          </div>
        </section>
      );
}

export default Header;