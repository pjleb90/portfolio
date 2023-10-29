const Footer = () => {
    return (
        <div className='hidden lg:flex gap-10 justify-center items-center border-t border-gray-200 dark:border-teal-500'>
            <div className='text-center shadow-lg shadow-slate-500 dark:shadow-teal-500 pt-2 pb-2 pl-10 pr-10 rounded-xl my-10'>
                <h3 className=' text-lg font-medium pt-2 pb-2'>Intuitive designs</h3>
                <p className='py-2 text-gray-600 dark:text-teal-500'>
                    Focusing on SEO and responsiveness to make your website stand out.
                </p>
            </div>
            <div className='text-center shadow-lg shadow-slate-500 dark:shadow-teal-500 pt-2 pb-2 pl-10 pr-10 rounded-xl my-10'>
                <h3 className=' text-lg font-medium pt-2 pb-2'>Coding</h3>
                <p className='py-2 text-gray-600 dark:text-teal-500'>
                Do you have an idea for your next great website? Let&#39;s make it a reality!
                </p>
            </div>
            <div className='text-center shadow-lg shadow-slate-500 dark:shadow-teal-500 pt-2 pb-2 pl-10 pr-10 rounded-xl my-10'>
                <h3 className=' text-lg font-medium pt-2 pb-2'>Consulting</h3>
                <p className='py-2 text-gray-600 dark:text-teal-500'>
                Have a current website that you&#39;re not happy with? Let&#39;s get it where it needs to be.
                </p>
            </div>
        </div>
    );
}

export default Footer;