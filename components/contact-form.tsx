'use client';

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from "react-hot-toast";

import { Button } from './ui/button';


export const ContactForm = () => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAIL_KEY as string);

    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const sendEmail = () => {

        const templateParams = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

    emailjs
    .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams
    )
        .then((response) => {
            console.log(response);
            setData({
            name: '',
            email: '',
            message: '',
            });
        })
        .catch((error) => {
            console.error(error);
            toast.error('An error occurred while sending your email.');
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (data.name && data.email && data.message) {
        // If the form is valid, you can send data to the API
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status === 200) {
            // Handle success
            sendEmail();
                toast.success(`Hey ${data.name}, your email was sent successfully!`);
        } else {
            // Handle API error
            toast.error('An error occurred while submitting the form.');
        }
        } else {
            toast.error('Please fill in all fields.');
        }
    };


    return (
        <div>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md space-y-4">
                <h2 className='text-center text-4xl py-2 text-teal-600 font-medium md:text-6xl'>Contact Me</h2>
                <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl text-teal-600 ">
                    Have a question or just want to say hi? Don&apos;t hesitate to reach out.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full md:w-auto"
                    >
                        Send message
                    </Button>
                </form>
            </div>
        </div>
    )
}