import React, { ReactElement } from 'react';
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { MdOutlineFileDownload } from 'react-icons/md';
import Link from 'next/link';
import { github_Url, linkedin_Url, resume_Url } from '@/me/info.me';

interface socialTypes {
    link: string;
    label: string;
    icon: ReactElement;
}
const socials: socialTypes[] = [
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
    return (
        <nav className="h-[10vh] flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
                    Lovish Bansal
                </h1>
                <span className="text-4xl -rotate-2">
                    👨🏻‍💻
                </span>
            </div>
            <div className="flex gap-4 items-center">
                {socials.map((social: socialTypes, index: number) => {
                    return (
                        <Link
                            className="transition-all h-6 w-6 hover:scale-110"
                            href={social.link}
                            title={social.label}
                            key={index}
                            target='_blank'
                        >
                            {social.icon}
                        </Link>
                    );
                })}
                <a
                    href={resume_Url}
                    className="transition-all bg-white hover:bg-slate-300 text-black rounded-lg flex p-1 px-3 gap-2 items-center text-lg"
                    title="download"
                    download={true}
                >
                    <MdOutlineFileDownload />
                    <span>Resume</span>
                </a>
            </div>
        </nav>
    );
}
