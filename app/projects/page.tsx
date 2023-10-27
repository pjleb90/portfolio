import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const gallery = () => {
  return (
    <div>
        <div className="text-center p-10">
          <h3 className='text-center text-4xl py-2 text-teal-600 font-medium md:text-6xl'>Projects</h3>
          <p className='py-2 leading-8 text-gray-800 dark:text-teal-500 md:text-xl xl:text-xl'>
              Below are some of the projects that I have worked on recently. All projects were developed with React, Next.js & Tailwind, with databases ranging from MongoDB, Supabase and PlanetScale.
          </p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="max-w-xl bg-white rounded-lg shadow dark:bg-gray-800 ">
            <a href="https://rental-app-ebon.vercel.app/" target="blank" rel="noopener noreferrer">
                <Image className="rounded-t-lg" src="/images/web1.png" alt="A image of a Airbnb clone" width={1000} height={500}/>
            </a>
            <div className="p-5">
                <a href="https://rental-app-ebon.vercel.app/" target="blank" rel="noopener noreferrer">
                    <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-800 dark:text-teal-500">A Airbnb clone</h5>
                </a>
                <p className="mb-3 font-medium text-gray-800 dark:text-teal-500">A full stack Airbnb clone built with Next.js 13, React, Tailwind, Prisma, MongoDB, and NextAuth</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Link href="https://rental-app-ebon.vercel.app/" target="blank" rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-800
                      dark:text-grey-800 focus:ring-4 focus:outline-none rounded-lg px-4 py-2
                      text-center font-bold mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
                      style={{ display: 'inline' }}
                  >
                    Check it out
                  </Link>
                  <Link href="https://github.com/pjleb90/airbnb" target="blank" rel="noopener noreferrer" className="text-gray-800 dark:text-teal-500">
                    <AiFillGithub className="h-[3rem] w-[3rem]" style={{ display: 'inline' }}/>
                  </Link>
                </div>
            </div>
          </div>
          <div className="max-w-xl bg-white rounded-lg shadow dark:bg-gray-800">
            <a href="https://music-player-blush-ten.vercel.app/" target="blank" rel="noopener noreferrer">
                <Image className="rounded-t-lg" src="/images/web2.png" alt="A picture of a Spotify clone" width={1000} height={500}/>
            </a>
            <div className="p-5">
                <a href="https://music-player-blush-ten.vercel.app/" target="blank" rel="noopener noreferrer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-teal-500">A Spotify clone</h5>
                </a>
                <p className="mb-3 font-medium text-gray-800 dark:text-teal-500">A full stack Spotify clone using Next 13.4, React, Stripe, Supabase, PostgreSQL, and Tailwind</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Link href="https://music-player-blush-ten.vercel.app/" target="blank" rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-800
                      dark:text-grey-800 focus:ring-4 focus:outline-none rounded-lg px-4 py-2
                      text-center font-bold mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
                      style={{ display: 'inline' }}
                  >
                    Check it out
                  </Link>
                  <Link href="https://github.com/pjleb90/spotify" target="blank" rel="noopener noreferrer" className="text-gray-800 dark:text-teal-500">
                    <AiFillGithub className="h-[3rem] w-[3rem]" style={{ display: 'inline' }}/>
                  </Link>
                </div>
            </div>
          </div>
          <div className="max-w-xl bg-white rounded-lg shadow dark:bg-gray-800">
            <a href="https://e-comm-dashboard-five.vercel.app" target="blank" rel="noopener noreferrer">
                <Image className="rounded-t-lg" src="/images/web3.png" alt="A image of an e-commerce dashboard" width={1000} height={500}/>
            </a>
            <div className="p-5">
                <a href="https://e-comm-dashboard-five.vercel.app" target="blank" rel="noopener noreferrer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-teal-500">A backend e-commerce dashboard</h5>
                </a>
                <p className="mb-3 font-medium text-gray-800 dark:text-teal-500">A dashboard site for my e-commerce site, built with Next.js, Tailwind, shadcn/ui, Clerk & PlanetScale</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Link href="https://e-comm-dashboard-five.vercel.app" target="blank" rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-800
                      dark:text-grey-800 focus:ring-4 focus:outline-none rounded-lg px-4 py-2
                      text-center font-bold mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
                      style={{ display: 'inline' }}
                  >
                    Check it out
                  </Link>
                  <Link href="https://github.com/pjleb90/e-comm-admin" target="blank" rel="noopener noreferrer" className="text-gray-800 dark:text-teal-500">
                    <AiFillGithub className="h-[3rem] w-[3rem]" style={{ display: 'inline' }}/>
                  </Link>
                </div>
            </div>
          </div>
          <div className="max-w-xl bg-white rounded-lg shadow dark:bg-gray-800">
            <a href="https://e-comm-store-chi.vercel.app/" target="blank" rel="noopener noreferrer">
                <Image className="rounded-t-lg" src="/images/web4.png" alt="A image of an e-commerce store front" width={1000} height={500}/>
            </a>
            <div className="p-5">
                <a href="https://e-comm-store-chi.vercel.app/" target="blank" rel="noopener noreferrer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-teal-500">A frontend e-commerce store</h5>
                </a>
                <p className="mb-3 font-medium text-gray-800 dark:text-teal-500">A frontend e-commerce store, connected to my e-comm-admin dashboard, built with Next.js, Tailwind & Stripe</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Link href="https://e-comm-store-chi.vercel.app/" target="blank" rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-800
                      dark:text-grey-800 focus:ring-4 focus:outline-none rounded-lg px-4 py-2
                      text-center font-bold mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
                      style={{ display: 'inline' }}
                  >
                    Check it out
                  </Link>
                  <Link href="https://github.com/pjleb90/e-comm-store" target="blank" rel="noopener noreferrer" className="text-gray-800 dark:text-teal-500">
                    <AiFillGithub className="h-[3rem] w-[3rem]" style={{ display: 'inline' }}/>
                  </Link>
                </div>
            </div>
          </div>
          <div className="max-w-xl bg-white rounded-lg shadow dark:bg-gray-800">
            <a href="https://saas-ai-blush.vercel.app/" target="blank" rel="noopener noreferrer">
                <Image className="rounded-t-lg" src="/images/web5.png" alt="A SaaS, AI site" width={1000} height={500}/>
            </a>
            <div className="p-5">
                <a href="https://saas-ai-blush.vercel.app/" target="blank" rel="noopener noreferrer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-teal-500">A software-as-a-service, AI generation site </h5>
                </a>
                <p className="mb-3 font-medium text-gray-800 dark:text-teal-500">A SaaS AI Platform built with Next.js 13, React, Tailwind, shadcn/ui, Prisma, and Stripe</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Link href="https://saas-ai-blush.vercel.app/" target="blank" rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-800
                      dark:text-grey-800 focus:ring-4 focus:outline-none rounded-lg px-4 py-2
                      text-center font-bold mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
                      style={{ display: 'inline' }}
                  >
                    Check it out
                  </Link>
                  <Link href="https://github.com/pjleb90/SaaS-AI" target="blank" rel="noopener noreferrer" className="text-gray-800 dark:text-teal-500">
                    <AiFillGithub className="h-[3rem] w-[3rem]" style={{ display: 'inline' }}/>
                  </Link>
                </div>
            </div>
          </div>
          <div className="max-w-xl bg-white rounded-lg shadow dark:bg-gray-800">
            <a href="https://landscaping-temp.vercel.app/" target="blank" rel="noopener noreferrer">
                <Image className="rounded-t-lg" src="/images/web6.png" alt="A commercial landscaping website" width={1000} height={500}/>
            </a>
            <div className="p-5">
                <a href="https://landscaping-temp.vercel.app/" target="blank" rel="noopener noreferrer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-teal-500">A commercial landscaping site</h5>
                </a>
                <p className="mb-3 font-medium text-gray-800 dark:text-teal-500">A commercial landscaping site built with Next.js, shadcn/ui & Tailwind </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Link href="https://landscaping-temp.vercel.app/" target="blank" rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-800
                      dark:text-grey-800 focus:ring-4 focus:outline-none rounded-lg px-4 py-2
                      text-center font-bold mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
                      style={{ display: 'inline' }}
                  >
                    Check it out
                  </Link>
                  <Link href="https://github.com/pjleb90/landscaping-temp" target="blank" rel="noopener noreferrer" className="text-gray-800 dark:text-teal-500">
                    <AiFillGithub className="h-[3rem] w-[3rem]" style={{ display: 'inline' }}/>
                  </Link>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default gallery;