import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"


const Responsive = () => {
    return (
        <div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex px-4 bg-white dark:bg-gray-800 mb-8 py-10 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white border-2 border-gray-700 dark:border-gray-900">
                        <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                            className="dark:hidden w-[272px] h-[572px]" alt="mobile device view" width={500} height={500} />
                        <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                            className="hidden dark:block w-[272px] h-[572px]" alt="mobile device view" width={500} height={500} />
                    </div>
                    <div className="lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl">
                                Website not working how you expect?
                            </h2>
                            <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-800 dark:text-white">
                                If your website isn&#39;t responsive on mobile, I can fix that. Let me get your website up to speed and keep your customers coming back.
                            </p>
                        </div>
                        <div className='space-x-4'>
                        </div>
                    </div>
                </div>
            </div>
                <div className='hidden text-5xl md:flex justify-center gap-16 py-3 text-gray-600 dark:text-teal-500 border-t border-teal-500'>
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
        </div>
    );
}

export default Responsive;