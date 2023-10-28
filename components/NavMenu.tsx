
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

import Container from "./container";

const NavMenu = () => {

    return (
        <div className="border-b border-gray-600 dark:border-teal-500">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <nav className="lg:flex space-x-4 font-medium md:text-xl xl:text-xl text-gray-500 dark:text-teal-500">
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                        <Link href="/projects">
                            Projects
                        </Link>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </nav>
                    <div style={{ marginLeft: '1rem', marginRight: '1rem' }} className="right-0">
                        <ThemeToggle />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavMenu;