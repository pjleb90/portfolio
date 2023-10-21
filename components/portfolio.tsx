import Image from "next/image";

const Portfolio = () => {
    return (
        <section>
            <div className="text-center p-10">
              <h3 className=' text-4xl py-1'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                  Below are some of the projects that I have worked on in my free time.
              </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap'>
              <div className="basis-1/3 flex-1">
                <a href="https://rental-app-ebon.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <p className="text-center text-gray-800 dark:text-white mt-2">Airbnb</p>
                  <Image src="/images/web1.png" className='rounded-lg object-cover'
                    width={500} height={500}
                    alt='an image of a portfolio project'
                    style={{margin: "auto", }}
                  />
                </a>
              </div>
              <div className="basis-1/3 flex-1">
                <a href="https://music-player-blush-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <p className="text-center text-gray-800 dark:text-white mt-2">Spotify</p>
                  <Image src="/images/web2.png" className='rounded-lg object-cover'
                    width={500} height={500}
                    alt='a dog'
                    style={{margin: "auto", }}
                  />
                </a>
              </div>
              <div className="basis-1/3 flex-1">
                <a href="https://e-comm-dashboard-five.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <p className="text-center text-gray-800 dark:text-white mt-2">E-commerce dashboard (synced to E-commerce store)</p>
                  <Image src="/images/web3.png" className='rounded-lg object-cover'
                    width={500} height={500}
                    alt='an image of a portfolio project'
                    style={{margin: "auto", }}
                  />
                </a>
              </div>
              <div className="basis-1/3 flex-1">
                <a href="https://e-comm-store-git-main-pjleb90.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <p className="text-center text-gray-800 dark:text-white mt-2">E-commerce store (synced to E-commerce dashboard)</p>
                  <Image src="/images/web4.png" className='rounded-lg object-cover'
                    width={500} height={500}
                    alt='an image of a portfolio project'
                    style={{margin: "auto", }}
                  />
                </a>
              </div>
              <div className="basis-1/3 flex-1">
                <a href="https://saas-ai-blush.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <p className="text-center text-gray-800 dark:text-white mt-2">Oracle; a software as a service - AI site</p>
                  <Image src="/images/web5.png" className='rounded-lg object-cover'
                    width={500} height={500}
                    alt='an image of a portfolio project'
                    style={{margin: "auto", }}
                  />
                </a>
              </div>
              <div className="basis-1/3 flex-1">
                <a href="https://landscaping-temp.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <p className="text-center text-gray-800 dark:text-white mt-2">Greater Landscaping; a custom landscaping site</p>
                      <Image src="/images/web6.png" className='rounded-lg object-cover'
                        width={500} height={500}
                        alt='an image of a portfolio project'
                        style={{margin: "auto", }}
                      />
                  </a>
              </div>
            </div>
        </section>
    );
}

export default Portfolio;