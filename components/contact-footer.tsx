const ContactFooter = () => {
    return (
        <div className=' lg:flex gap-10 justify-center items-center border-t border-teal-500'>
            <div className='text-center shadow-lg pt-2 pb-2 pl-10 pr-10 rounded-xl my-10'>
                <h3 className=' text-lg font-medium pt-2 pb-2'>Intuitive designs</h3>
                {/* <Image src="/images/design.png"
                width={100} height={100}
                alt='a hashtag icon'
                style={{margin: "auto", }}
                /> */}
                <p className='py-2'>
                </p>
                Focusing on SEO and responsiveness<br></br>to make your website stand out.
            </div>
            <div className='text-center shadow-lg pt-2 pb-2 pl-10 pr-10 rounded-xl my-10'>
                <h3 className=' text-lg font-medium pt-2 pb-2'>Coding</h3>
                {/* <Image src="/images/code.png"
                width={100} height={100}
                alt='a design icon'
                style={{margin: "auto", }}
                /> */}
                <p className='py-2'>
                Do you have an idea for your next great website?
                <br></br>Let&#39;s make it a reality!
                </p>
            </div>
            <div className='text-center shadow-lg pt-2 pb-2 pl-10 pr-10 rounded-xl my-10'>
                <h3 className=' text-lg font-medium pt-2 pb-2'>Consulting</h3>
                {/* <Image src="/images/consulting.png"
                width={100} height={100}
                alt='a consulting icon'
                style={{margin: "auto", }}
                /> */}
                <p className='py-2'>
                Have a current website that you&#39;re not happy with?
                <br></br>Allow me to bring it to a level that meets your standards.
                </p>
            </div>
        </div>
    );
}

export default ContactFooter;