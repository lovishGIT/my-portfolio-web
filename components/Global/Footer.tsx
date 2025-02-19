import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Mail } from 'lucide-react';
import {
    my_image,
    name,
    my_email,
    github_Url,
    linkedin_Url,
} from '@/me/info.me';
import Views from './profileViews';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <Image
                            src={my_image}
                            width={50}
                            height={50}
                            className="rounded-full shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                            alt={name}
                        />
                        <div>
                            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                {name}
                            </h3>
                            <p className="text-sm text-slate-400">
                                Software Developer
                            </p>
                        </div>
                    </div>

                    <Views className="order-3 md:order-2" />

                    <div className="flex gap-4 order-2 md:order-3">
                        <Link
                            href={`mailto:${my_email}`}
                            className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-800 transition-colors"
                            title="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </Link>
                        <Link
                            href={github_Url}
                            className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-800 transition-colors"
                            title="GitHub"
                            target="_blank"
                        >
                            <SiGithub className="h-5 w-5" />
                        </Link>
                        <Link
                            href={linkedin_Url}
                            className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-800 transition-colors"
                            title="LinkedIn"
                            target="_blank"
                        >
                            <SiLinkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-slate-400">
                    <p>
                        © {currentYear} {name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
