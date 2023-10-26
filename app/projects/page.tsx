import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const gallery = () => {
  return (
    <section>
        <div className="text-center p-10">
          <h3 className='text-center text-4xl py-2 text-teal-600 font-medium md:text-6xl'>Projects</h3>
          <p className='text-2xl py-2 leading-8 text-gray-800 dark:text-teal-500 '>
              Below are some of the projects that I have worked on recently. All projects were developed with React, Next.js & Tailwind, with databases ranging from MongoDB, Supabase and PlanetScale.
          </p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap'>
          <div className="basis-1/3 flex-1">
            <a href="https://rental-app-ebon.vercel.app/" target="_blank" rel="noopener noreferrer">
              <p className="text-center text-2xl text-gray-800 dark:text-teal-500  mt-2">a ground-up Airbnb rebuild</p>
              <Image src="/images/web1.png" className='rounded-lg object-cover'
                width={500} height={500}
                alt='an image of a portfolio project'
                style={{margin: "auto", }}
              />
            </a>
            <div className="flex justify-center mt-4 text-gray-800 dark:text-teal-500 ">
              <Link href="https://github.com/pjleb90/airbnb" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="h-[3rem] w-[3rem]" />
              </Link>
            </div>
          </div>
          <div className="basis-1/3 flex-1">
            <a href="https://music-player-blush-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
              <p className="text-center text-2xl text-gray-800 dark:text-teal-500  mt-2">a ground-up Spotify rebuild</p>
              <Image src="/images/web2.png" className='rounded-lg object-cover'
                width={500} height={500}
                alt='a dog'
                style={{margin: "auto", }}
              />
            </a>
            <div className="flex justify-center mt-4 text-gray-800 dark:text-teal-500">
              <Link href="https://github.com/pjleb90/spotify" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="h-[3rem] w-[3rem]" />
              </Link>
          </div>
          </div>
          <div className="basis-1/3 flex-1">
            <a href="https://e-comm-dashboard-five.vercel.app/" target="_blank" rel="noopener noreferrer">
              <p className="text-center text-2xl text-gray-800 dark:text-teal-500 mt-2">a back-end e-commerce dashboard</p>
              <Image src="/images/web3.png" className='rounded-lg object-cover'
                width={500} height={500}
                alt='an image of a portfolio project'
                style={{margin: "auto", }}
              />
            </a>
          <div className="flex justify-center mt-4 text-gray-800 dark:text-teal-500">
            <Link href="https://github.com/pjleb90/e-comm-admin" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="h-[3rem] w-[3rem]" />
            </Link>
          </div>
          </div>
          <div className="basis-1/3 flex-1">
            <a href="https://e-comm-store-git-main-pjleb90.vercel.app/" target="_blank" rel="noopener noreferrer">
              <p className="text-center text-2xl text-gray-800 dark:text-teal-500  mt-2">a front-end e-commerce store front</p>
              <Image src="/images/web4.png" className='rounded-lg object-cover'
                width={500} height={500}
                alt='an image of a portfolio project'
                style={{margin: "auto", }}
              />
            </a>
            <div className="flex justify-center mt-4 text-gray-800 dark:text-teal-500">
              <Link href="https://github.com/pjleb90/e-comm-store" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="h-[3rem] w-[3rem]" />
              </Link>
            </div>
          </div>
          <div className="basis-1/3 flex-1">
            <a href="https://saas-ai-blush.vercel.app/" target="_blank" rel="noopener noreferrer">
              <p className="text-center text-2xl text-gray-800 dark:text-teal-500  mt-2">a software as a service - AI site</p>
              <Image src="/images/web5.png" className='rounded-lg object-cover'
                width={500} height={500}
                alt='an image of a portfolio project'
                style={{margin: "auto", }}
              />
            </a>
            <div className="flex justify-center mt-4 text-gray-800 dark:text-teal-500">
              <Link href="https://github.com/pjleb90/SaaS-AI" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="h-[3rem] w-[3rem]" />
              </Link>
            </div>
          </div>
          <div className="basis-1/3 flex-1">
            <a href="https://landscaping-temp.vercel.app/" target="_blank" rel="noopener noreferrer">
              <p className="text-center text-2xl text-gray-800 dark:text-teal-500  mt-2">a custom commercial site</p>
                  <Image src="/images/web6.png" className='rounded-lg object-cover'
                    width={500} height={500}
                    alt='an image of a portfolio project'
                    style={{margin: "auto", }}
                  />
              </a>
              <div className="flex justify-center mt-4 text-gray-800 dark:text-teal-500">
                <Link href="https://github.com/pjleb90/landscaping-temp" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="h-[3rem] w-[3rem]" />
                </Link>
              </div>
          </div>
        </div>
    </section>
  );
}
export default gallery;