import Image from "next/image"
import { FaCircleCheck } from "react-icons/fa6";

const Content = () => {
    return (
        <div>
            <div className="bg-white dark:bg-gray-900 py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    <div>
                        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                        <Image src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" width={500} height={500} />
                        </div>
                    </div>
                    <div className="md:pt-8">
                        <h1 className="max-w-xl mb-4 text-4xl font-bold text-teal-600 dark:text-teal-500 tracking-tight leading-none text-center md:text-left md:text-5xl xl:text-5xl">What makes me the right choice</h1>
                        <p className="max-w-2xl text-center mb-6 lg:mb-8 md:text-lg md:text-left lg:text-xl text-gray-800 dark:text-white">
                            60% of all internet traffic is on mobile devices, so I optimize your mobile to perform it&#39;s best in search engines.
                            <br></br>
                            <br></br>
                            Your website will fit all mobile screens sizes, tablets, and desktop sizes so new clients can access your site from anywhere.
                            <br></br>
                            <br></br>
                            I start building your site for mobile devices first, then add on to it to make tablet and desktop.
                        </p>
                        <ul className="pb-10 flex flex-col md:flex-row md:flex-wrap max-w-2xl text-center mb-6 lg:mb-2 md:text-lg md:text-left lg:text-xl">
                            <li className="flex items-center mb-2 md:mr-4"> <FaCircleCheck className="mr-2 text-lg" /> Keyword-Centered Content for SEO optimization</li>
                            <li className="flex items-center mb-2 md:mr-4"> <FaCircleCheck className="mr-2 text-lg" /> Mobile-First-Optimized for the Best Experience</li>
                            <li className="flex items-center mb-2 md:mr-4"> <FaCircleCheck className="mr-2 text-lg" /> Clean & Organized Code Structure For Web Crawlers</li>
                            <li className="flex items-center mb-2 md:mr-4"> <FaCircleCheck className="mr-2 text-lg" /> Fully Responsive For Mobile, Tablet, & Desktop</li>
                        </ul>
                        <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4 text-teal-600 dark:text-teal-500 tracking-tight leading-none text-center md:text-left">Websites done right</h2>
                        <p className="max-w-2xl text-center mb-6 lg:mb-8 md:text-lg md:text-left lg:text-xl text-gray-800 dark:text-white">
                            Websites built by hand will out-perform most WordPress sites and drag and drop page builders which could cost thousands of dollars. When it comes to the web, the faster and more organized websites win.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;