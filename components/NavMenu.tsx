'use client';

import React, { useState } from "react";
import Link from "next/link";
import Container from "./container";
import { ThemeToggle } from "./theme-toggle";

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
        window.scrollTo({
            top: section.offsetTop - 64, // Adjust this value to match layout
            behavior: "smooth",
        });
        setMenuOpen(false); // Close the menu after clicking a link
        }
    };

    return (
        <div className="border-b border-teal-500">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <div>
                        <p className="font-bold text-xl">pjleb90@gmail.com</p>
                    </div>
                    <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                        <ThemeToggle />
                    </div>
                    <div className="lg:hidden">
                        {!menuOpen && (
                            <button
                                className="text-teal-500"
                                onClick={() => setMenuOpen(true)}
                            >
                                Menu
                            </button>
                        )}
                        {menuOpen && (
                            <div className="block lg:hidden space-y-2">
                                <button onClick={() => scrollToSection("about")}>About</button>
                                <button onClick={() => scrollToSection("portfolio")}>Portfolio</button>
                                <button onClick={() => scrollToSection("contact")}>Contact</button>
                            </div>
                            )}
                    </div>
                    {/* Render the buttons when the screen size is large (lg and above) */}
                    <div className="hidden lg:flex space-x-4">
                        <button onClick={() => scrollToSection("about")}>About</button>
                        <button onClick={() => scrollToSection("portfolio")}>Portfolio</button>
                        <Link href="/contact"><button>Contact</button></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavMenu;
