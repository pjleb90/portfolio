import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"

const Header = () => {
    return (
        <section>
          <div className='text-center p-10'>
            <h2 className='text-4xl py-2 text-center text-teal-600 font-medium md:text-6xl mx-auto'>PJ LeBlanc</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Web Developer</h3>
            <p className='text-md py-5 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
              A freelancer providing services for web design and development. Looking forward to hearing from you!
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
        </section>
      );
}

export default Header;