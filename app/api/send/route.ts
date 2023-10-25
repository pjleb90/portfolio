import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("body", body);
        const { email, name, message } = body
        const data = await resend.emails.send({
            from: 'PJ <pj@pjleblanc.dev>',
            to: email,
            subject: 'Greetings!',
            text: 'Thank you for your email. I will get back to you as soon as possible.',
            react: EmailTemplate({ firstName: name }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ "error": error });
    }
}
