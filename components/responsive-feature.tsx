'use client';

import Lottie from "lottie-react"
import animationData from "@/assets/animation.json";



const Responsive = () => {
    return (
        <div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex px-4 bg-white dark:bg-gray-800 mb-8 py-10 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <Lottie animationData={animationData} />
                    <div className="lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl">
                                Get your business recognized
                            </h2>
                            <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-800 dark:text-white">
                                An online presence is a must in this day and age. Let me get your website up to speed and keep your customers engaged and coming back.
                            </p>
                        </div>
                        <div className='space-x-4'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Responsive;