
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

import Container from "./container";

const NavMenu = () => {

    return (
        <Container>
            <nav className="relative px-10 sm:px-6 lg:px-8 flex h-16 items-center">
                <ul className="lg:flex space-x-4 font-medium md:text-xl xl:text-xl text-gray-600 dark:text-teal-500">
                    <Link href="/" className="text-gray-600 hover:text-teal-500 dark:text-teal-500 dark:hover:text-white hover:underline">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-teal-500 dark:text-teal-500 dark:hover:text-white hover:underline">
                        About
                    </Link>
                    <Link href="/projects" className="text-gray-600 hover:text-teal-500 dark:text-teal-500 dark:hover:text-white hover:underline">
                        Projects
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-teal-500 dark:text-teal-500 dark:hover:text-white hover:underline">
                        Contact
                    </Link>
                </ul>
                <div style={{ marginLeft: '1rem', marginRight: '1rem' }} className="right-0">
                    <ThemeToggle />
                </div>
            </nav>
            <div className="border-b border-gray-600 dark:border-teal-500"></div>
        </Container>
    );
};

export default NavMenu;