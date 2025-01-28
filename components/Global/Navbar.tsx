'use client';

import React, { ReactElement, useState, useEffect } from 'react';
import Link from 'next/link';
import {
    name,
    my_email,
    github_Url,
    linkedin_Url,
    resume_Url,
} from '@/me/info.me';
import { Mail, Menu, X } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdOutlineFileDownload } from 'react-icons/md';

interface SocialType {
    link: string;
    label: string;
    icon: ReactElement;
}

const socials: SocialType[] = [
    {
        link: 'mailto:' + my_email,
        label: 'Mail',
        icon: <Mail className="h-full w-full" />,
    },
    {
        link: linkedin_Url,
        label: 'Linkedin',
        icon: <SiLinkedin className="h-full w-full" />,
    },
    {
        link: github_Url,
        label: 'Github',
        icon: <SiGithub className="h-full w-full" />,
    },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setHasScrolled(scrollPosition > 0);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        // Cleanup
        return () =>
            window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 h-[10vh] z-50 backdrop-blur-sm transition-colors duration-300 ${
                hasScrolled ? 'bg-slate-950/75' : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 md:px-6 h-full flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        {name}
                    </h1>
                    <span className="text-3xl md:text-4xl -rotate-2 hover:rotate-12 transition-transform">
                        👨🏻‍💻
                    </span>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-4 items-center">
                    {socials.map(
                        (social: SocialType, index: number) => (
                            <Link
                                className="transition-all h-6 w-6 hover:scale-110 hover:text-purple-400"
                                href={social.link}
                                title={social.label}
                                key={index}
                                target="_blank"
                            >
                                {social.icon}
                            </Link>
                        )
                    )}
                    <a
                        href={resume_Url}
                        className="transition-all bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex p-1 px-3 gap-2 items-center text-lg hover:opacity-90"
                        title="download"
                        download={true}
                    >
                        <MdOutlineFileDownload />
                        <span>Resume</span>
                    </a>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div
                        className={`absolute top-full left-0 right-0 shadow-md py-4 md:hidden ${
                            hasScrolled
                                ? 'bg-slate-950/95'
                                : 'bg-slate-950/75'
                        }`}
                    >
                        <div className="flex flex-col items-center gap-4">
                            {socials.map(
                                (
                                    social: SocialType,
                                    index: number
                                ) => (
                                    <Link
                                        className="transition-all h-6 flex justify-center gap-2 hover:scale-110 hover:text-purple-400"
                                        href={social.link}
                                        title={social.label}
                                        key={index}
                                        target="_blank"
                                    >
                                        {social.icon}
                                        {social.label}
                                    </Link>
                                )
                            )}
                            <a
                                href={resume_Url}
                                className="transition-all bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex p-1 px-3 gap-2 items-center text-lg hover:opacity-90"
                                title="download"
                                download={true}
                            >
                                <MdOutlineFileDownload />
                                <span>Resume</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
