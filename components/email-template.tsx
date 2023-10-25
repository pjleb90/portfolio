import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Hey, {firstName}!</h1>
    <p>Thank you for your email. I will reply to you as soon as possible.</p>
    <p>PJ LeBlanc</p>
  </div>
);
