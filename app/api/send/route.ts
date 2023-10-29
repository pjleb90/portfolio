import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("body", body);
        const { email, name, message } = body
        const data = await resend.emails.send({
            from: 'PJ <pj@pjleblanc.dev>',
            to: email,
            subject: 'Greetings from pjleblanc.dev!',
            text: 'Thank you for your email.',
            react: EmailTemplate({ firstName: name }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ "error": error });
    }
}
