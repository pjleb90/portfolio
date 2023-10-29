import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
  Button,
  Img,
} from '@react-email/components'

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
<Html>
  <Head>
    <Tailwind>
      <Body className='bg-white my-12 mx-auto font-sans'>
        <Img
          src="https://lh3.googleusercontent.com/a/ACg8ocKGTQXPV9iad5yzHeWt2mEqiV2ejkQKA2cJzVZGQW5Me2Y=s96-c-rg-br100"
          className='mx-auto w-24'
        >
        </Img>
        <Container className='p-8 rounded-lg shadow-lg'>
          <Heading className='text-xl pt-4'>
            Hey {firstName} 👋
          </Heading>
          <Text className='text-lg font-medium text-gray-700'>
            Thanks for taking the time to reach out. I&#39;ll get back to you within 24 hours.
            Looking forward to working with you!
          </Text>
          <Text className='font-sans font-medium text-gray-700'>
            Sincerely,
          </Text>
          <Text className='font-sans font-medium text-gray-700'>
            PJ LeBlanc
          </Text>
          <Button className="bg-teal-400 text-gray-800 rounded-xl px-4 py-2 text-center mr-3"
                  href="https://www.pjleblanc.dev/"
          >
            back to my homepage
          </Button>
        </Container>
      </Body>
    </Tailwind>
  </Head>
</Html>
);
