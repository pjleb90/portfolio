'use client';

import { useState } from 'react';
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const sendEmail = async (e: any) => {
        e.preventDefault();
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if(response.status === 200) {
            setData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            toast.success(`Hey ${data.name}, your email was sent successfully!`)
        }
    }

    return (
        <div>
            <section>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className='text-center text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Contact Me</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
                        Have a question or just want to say hi? Don&apos;t hesitate to reach out.
                    </p>
                    <form onSubmit={sendEmail} action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800 dark:text-teal-500">Your email</label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800 dark:text-teal-500">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleInputChange}
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                                placeholder="your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-800 dark:text-teal-500">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={data.subject}
                                onChange={handleInputChange}
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                                placeholder="Let me know how I can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800 dark:text-teal-500">Your message</label>
                            <textarea
                                    name="message"
                                    rows={6}
                                    value={data.message}
                                    onChange={handleInputChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                    placeholder="Leave a comment...">
                                </textarea>
                        </div>
                        <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-800
                            dark:text-grey-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-2
                            text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                                Send message
                        </Button>
                    </form>
                </div>
                <div className=' lg:flex gap-10 justify-center items-center border-t border-teal-500'>
                    <div className='text-center shadow-lg pt-2 pb-2 pl-10 pr-10 rounded-xl my-10'>
                        <h3 className=' text-lg font-medium pt-2 pb-2'>Intuitive designs</h3>
                        {/* <Image src="/images/design.png"
                        width={100} height={100}
                        alt='a hashtag icon'
                        style={{margin: "auto", }}
                        /> */}
                        <p className='py-2'>
                        Creating responsive and accessible designs <br></br>suited for your project needs.
                        </p>
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
                        <br></br>I&#39;ll do my best to bring it to a level that meets your needs.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;