import React from 'react';
import { MdMail } from 'react-icons/md';
import { My_Description } from '@/me/info.me';

export default function HeroSection() {
    return (
        <div className="min-h-[100vh] md:min-h-[80vh] w-full flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col justify-center gap-8">
                <div className="text-2xl lg:text-4xl">
                    Hello! Myself{' '}
                    <h1 className="inline-block font-bold underline-offset-8 decoration-green-500 -rotate-2">
                        Lovish Bansal
                    </h1>
                    👋
                    <br />
                    <span>Nice to See You!</span>
                </div>
                <p className="max-w-[60%]">{My_Description}</p>
                <a href="mailto:lovishbansal441@gmail.com" className="group mr-auto">
                    <button className="text-3xl flex items-center group-hover:text-green-400 group">
                        Contact Me
                        <MdMail className="h-8 w-8" />
                    </button>
                    <div className="w-40 h-2 bg-green-500 rounded-2xl"></div>
                    <div className="w-40 h-2 bg-indigo-500 translate-x-2 rounded-2xl"></div>
                </a>
            </div>
            <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
                <div className="flex gap-3 translate-x-8">
                    <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                    <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                </div>
                <div className="flex gap-3 -translate-x-8">
                    <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                </div>
            </div>
        </div>
    );
}

{/* <Image src={MyAvatar} className="w-full h-full" objectFit="cover" />; */}