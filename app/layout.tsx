import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/Global/theme-provider';
import Navbar from '@/components/Global/Navbar';
import ScrollProgressBar from '@/components/Global/ScrollProgressBar';
import { ToastContainer } from 'react-toastify';
import { meta_description, meta_keywords, name } from '@/me/info.me';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: name,
    description: meta_description,
    creator: name,
    keywords: meta_keywords,
    alternates: {
        canonical: 'https://my-portfolio-web-sepia.vercel.app',
    },
    openGraph: {
        title: name,
        description: meta_description,
        type: 'profile',
        images: [
            { url: 'https://cdn.jsdelivr.net/gh/lovishGIT/my-portfolio-web/me/preview.png' },
        ],
    },
};

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

            {/* Adjusted blob positions and sizes for different screens */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 md:w-96 md:h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
    );
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${spaceGrotesk.className} antialiased min-h-screen`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ScrollProgressBar />
                    <div className="relative w-full px-4 sm:px-6 md:px-8 max-w-6xl mx-auto overflow-hidden">
                        <Navbar />
                        <AnimatedBackground />
                        <main className="relative z-10 pt-[10vh]">
                            {children}
                        </main>
                    </div>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
