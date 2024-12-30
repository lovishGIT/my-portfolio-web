// HeroSection.tsx
import React from 'react';
import { name, My_Description } from '@/me/info.me';

export default function HeroSection() {
    return (
        <div className="min-h-[90vh] md:min-h-[80vh] w-full flex flex-col md:flex-row justify-between items-center relative z-10">
            <div className="flex flex-col justify-center gap-8">
                <div className="text-2xl lg:text-4xl">
                    Hello! Myself{' '}
                    <h1 className="inline-block font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                        {name}
                    </h1>
                    <span className="inline-block hover:rotate-12 transition-transform">
                        👋
                    </span>
                    <br />
                    <span className="text-slate-300">
                        Nice to See You!
                    </span>
                </div>
                <p className="max-w-[60%] text-slate-400">
                    {My_Description}
                </p>
            </div>
            <div className="w-72 h-72 space-y-3 -rotate-[30deg] hover:rotate-0 transition-all duration-500">
                <div className="flex gap-3 translate-x-8">
                    <div
                        className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500
                        shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    ></div>
                    <div
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500
                        shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    ></div>
                </div>
                <div className="flex gap-3 -translate-x-8">
                    <div
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-red-500
                        shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                    ></div>
                    <div
                        className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500
                        shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    ></div>
                </div>
            </div>
        </div>
    );
}
