import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Featured = () => {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-6 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Let&#39;s make your dream website a reality</h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-800 dark:text-white">
                        From responsive designs to search engine optimization, if you need a new website to help you stand out or
                        if you&#39;re not happy with your existing one, I&#39;d love to work with you.
                    </p>
                    <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-800
                                dark:text-grey-800 focus:ring-4 focus:outline-none rounded-lg px-4 py-2
                                text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700">
                        Contact me
                    </a>
                    <a href="/projects" className="inline-flex items-center justify-center px-8 py-3 mr-3 text-base font-medium text-center text-gray-800 dark:text-teal-500 rounded-lg bg-primary-700">
                        See more
                        <ArrowRight className="w-5 h-5 ml-2 -mr-1"/>
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1698192000&semt=sph"
                        // src="https://img.freepik.com/premium-vector/isometric-developing-programming-coding-technologies-young-programmer-coding-new-project-using-computer-man-sitting-big-laptop-working_589019-2494.jpg"
                        width={500} height={500}
                        alt='a picture of a laptop with code'
                        style={{ borderRadius: '60px' }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Featured;