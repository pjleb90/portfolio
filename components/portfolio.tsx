import Image from "next/image";

const Portfolio = () => {
    return (
        <section>
            <div>
              <h3 className=' text-3xl py-1'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                  Below are some of the projects that I have worked on in my free time.
              </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap'>
              <div className="basis-1/3 flex-1">
                <p className="text-center text-gray-800 dark:text-white mt-2">Airbnb clone</p>
                  <Image src="/images/web1.png" className='rounded-lg object-cover'
                  width={500} height={500}
                  alt='an image of a portfolio project'
                  style={{margin: "auto", }}/>
                </div>
                <div className="basis-1/3 flex-1">
                  <p className="text-center text-gray-800 dark:text-white mt-2">Spotify clone</p>
                  <Image src="/images/web2.png" className='rounded-lg object-cover'
                  width={500} height={500}
                  alt='a dog'
                  style={{margin: "auto", }}/>
                </div>
                <div className="basis-1/3 flex-1">
                  <p className="text-center text-gray-800 dark:text-white mt-2">E-commerce dashboard *synced to E-commerce store</p>
                  <Image src="/images/web3.png" className='rounded-lg object-cover'
                  width={500} height={500}
                  alt='an image of a portfolio project'
                  style={{margin: "auto", }}/>
                </div>
                <div className="basis-1/3 flex-1">
                  <p className="text-center text-gray-800 dark:text-white mt-2">E-commerce store *synced to E-commerce dashboard</p>
                  <Image src="/images/web4.png" className='rounded-lg object-cover'
                  width={500} height={500}
                  alt='an image of a portfolio project'
                  style={{margin: "auto", }}/>
                </div>
                <div className="basis-1/3 flex-1">
                  <p className="text-center text-gray-800 dark:text-white mt-2">Software as a service - AI site</p>
                  <Image src="/images/web5.png" className='rounded-lg object-cover'
                  width={500} height={500}
                  alt='an image of a portfolio project'
                  style={{margin: "auto", }}/>
                </div>
                <div className="basis-1/3 flex-1">
                  <p className="text-center text-gray-800 dark:text-white mt-2">A custom landscaping site</p>
                  <Image src="/images/web6.png" className='rounded-lg object-cover'
                  width={500} height={500}
                  alt='an image of a portfolio project'
                  style={{margin: "auto", }}/>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;