import { ContactForm } from "@/components/contact-form";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle
} from "react-icons/ai"

const contact = () => {

    return (
        <div>
            <ContactForm />
            <div className='text-4xl md:text-5xl lg:text-5xl xl:text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-teal-500 border-t border-gray-600 dark:border-teal-500'>
              <a href="https://www.linkedin.com/in/pjleblanc90/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/pjleb90/" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
              <a href="https://twitter.com/pjleb90/" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle />
              </a>
            </div>
        </div>
     );
}

export default contact;
