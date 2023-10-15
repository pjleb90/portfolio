'use client';

import { FormEvent, useState } from 'react';
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);
        toast.success('Email sent!');

        // clear form fields after submission
        setEmail('');
        setSubject('');
        setMessage('');
    };



    return (
        <div>
            <section>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className='text-center text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Contact Me</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
                        Have a question or just want to say hi? Don&apos;t hesitate to reach out.
                    </p>
                    <form onSubmit={handleSubmit} action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800 dark:text-teal-500">Your email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-800 dark:text-teal-500">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800 dark:text-teal-500">Your message</label>
                            <textarea
                                    id="message"
                                    rows={6}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
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
            </section>
        </div>
    );
}

export default Contact;