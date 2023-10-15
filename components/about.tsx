import Image from "next/image";

const About = () => {
    return (
        <section>
            <div>
              <h3 className=' text-3xl py-1'>More about me</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                During my courses for <span className="text-teal-500">data analytics</span>, I discovered that I was most
                engaged when learning <span className="text-teal-500">R</span> and <span className="text-teal-500">sql</span>.
                As much as I enjoyed working with data in<span className="text-teal-500"> Excel</span> and creating data
                visualizations with <span className="text-teal-500"> Tableau</span>, cleaning and plotting data in
                <span className="text-teal-500"> RStudio</span> or querying large databases in
                <span className="text-teal-500"> BigQuery</span> made me feel like I was hacker in a movie.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                I decided then that I needed to pivot and signed up for a entry level <span className="text-teal-500">Python </span>
                program offered by the University of Michigan. I was hooked. I jumped into the never-ending rabbit hole of learning
                <span className="text-teal-500"> web development</span> and did a follow up course focused on building web applications with
                <span className="text-teal-500"> Python</span> and <span className="text-teal-500">Django</span>.
                After seeing the industry start to lean heavily towards component based web development with<span className="text-teal-500"> React</span>,
                I signed up for a front-end developer course focused on <span className="text-teal-500"> Javascript</span> and <span className="text-teal-500"> React </span>
                and have really been blown away with how powerful it is.
              </p>
            </div>
            <div className=' lg:flex gap-10 justify-center items-center'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <h3 className=' text-lg font-medium pt-8 pb-2'>Intuitive designs</h3>
                <Image src="/images/design.png"
                width={100} height={100}
                alt='a hashtag icon'
                style={{margin: "auto", }}/>
                <p className='py-2'>
                  Creating responsive and accessible designs <br></br>suited for your project needs.
                </p>
                <h4 className='py-4 text-teal-600'>Implementation</h4>
                <p className=' text-gray-800 py-1 dark:text-white'>figma</p>
                <p className=' text-gray-800 py-1 dark:text-white'>mobile first design</p>
                <p className=' text-gray-800 py-1 dark:text-white'>UI/UX best practices </p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <h3 className=' text-lg font-medium pt-8 pb-2'>Coding</h3>
                <Image src="/images/code.png"
                width={100} height={100}
                alt='a design icon'
                style={{margin: "auto", }}/>
                <p className='py-2'>
                  Do you have an idea for your next great website?
                  <br></br>Let&#39;s make it a reality!
                </p>
                <h4 className='py-4 text-teal-600'>Implementation</h4>
                <p className=' text-gray-800 py-1 dark:text-white'>component based programming</p>
                <p className=' text-gray-800 py-1 dark:text-white'>tailwind css</p>
                <p className=' text-gray-800 py-1 dark:text-white'>semantic & meta tags for SEO optimization</p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <h3 className=' text-lg font-medium pt-8 pb-2'>Consulting</h3>
                <Image src="/images/consulting.png"
                width={100} height={100}
                alt='a consulting icon'
                style={{margin: "auto", }}/>
                <p className='py-2'>
                  Have a current website that you&#39;re not happy with?
                  <br></br>I&#39;ll do my best to bring it to a level that meets your needs.
                </p>
                <h4 className='py-4 text-teal-600'>Implementation</h4>
                <p className=' text-gray-800 py-1 dark:text-white'>Free consulations</p>
                <p className=' text-gray-800 py-1 dark:text-white'>best practices to make your website stand out</p>
                <p className=' text-gray-800 py-1 dark:text-white'>current industry standards to make your website relevant </p>
              </div>
            </div>
        </section>
    );
}
 
export default About;