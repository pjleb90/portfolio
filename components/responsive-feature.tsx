'use client';

import Lottie from "lottie-react"
import animationData from "@/assets/animation.json";



const Responsive = () => {
    return (
        <div className="bg-white dark:bg-gray-900 py-6 sm:py-8 lg:py-2">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <Lottie animationData={animationData} className="hidden lg:mt-0 lg:col-span-5 lg:flex"/>
                    <div className="lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6 text-center md:text-left">
                            <h2 className="max-w-xl mb-4 text-4xl font-bold text-teal-600 dark:text-teal-500 tracking-tight leading-none md:text-5xl xl:text-5xl">
                                Get your business recognized
                            </h2>
                            <div className="md:block lg:hidden p-4">
                                <Lottie animationData={animationData} />
                            </div>
                            <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-800 dark:text-white">
                                An online presence is a must in this day and age. Let me get your website up to speed and keep your customers engaged and coming back.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Responsive;