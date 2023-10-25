'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { ChevronDown } from "lucide-react";

import Container from "./container";

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="border-b border-teal-500">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <div>
                        <Link href="/">
                            <p className="font-bold text-xl">pjleb90@gmail.com</p>
                        </Link>
                    </div>
                    <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                        <ThemeToggle />
                    </div>
                    <div className="lg:hidden">
                        <ChevronDown />
                    </div>
                    {/* Render the buttons when the screen size is large (lg and above) */}
                    <div className="hidden lg:flex space-x-4">
                        <Link href="/about">About</Link>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavMenu;
