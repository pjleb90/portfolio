
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

import Container from "./container";

const NavMenu = () => {

    return (
        <div className="border-b border-teal-500">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <div className="lg:flex space-x-4">
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
                    </div>
                    <div style={{ marginLeft: '1rem', marginRight: '1rem' }} className="right-0">
                        <ThemeToggle />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavMenu;