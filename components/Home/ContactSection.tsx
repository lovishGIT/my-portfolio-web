'use client';
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import { my_avatar, my_email } from '@/me/info.me';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { EmailResponse } from '@/types';

const ContactSection = () => {
    const [isSending, setIsSending] = useState(false);
    const handleEmails = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setIsSending(true);
        const form = e.target as HTMLFormElement;
        let formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    name,
                    message,
                }),
            });
            const data: EmailResponse = await response.json();
            if (data.status === 'error') throw new Error(data.error);

            toast.success(data?.message || 'Email sent successfully');
            form.reset();
        } catch (error) {
            console.error('Error sending email: ' + error);
            toast.error('Error sending email');
        } finally {
            setIsSending(false);
        }
    };
    return (
        <section className="py-16 relative z-10 overflow-hidden">
            <Card className="max-w-2xl mx-auto text-slate-200 border-slate-800 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-purple-500/10 relative z-10">
                <CardHeader className="space-y-1">
                    <div className="flex flex-col items-center mb-6">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-purple-500/30">
                            <Image
                                src={my_avatar}
                                alt="Contact"
                                className="w-full h-full object-cover"
                                fill={true}
                            />
                        </div>
                        <CardTitle className="text-3xl font-bold text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Prefer email?
                        </CardTitle>
                        <CardDescription className="text-slate-400 text-center mt-2">
                            Write to me at{' '}
                            <span className="text-purple-400">
                                {my_email}
                            </span>
                            <p className="text-sm text-slate-700 mt-1">
                                I'll respond within 24 hours
                            </p>
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <form
                        className="space-y-6"
                        onSubmit={handleEmails}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
                                    size={18}
                                />
                                <Input
                                    name="name"
                                    placeholder="Name"
                                    className="bg-slate-800/50 border-slate-700 focus:border-purple-500 pl-10 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                                />
                            </div>
                            <div className="relative">
                                <Mail
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
                                    size={18}
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="bg-slate-800/50 border-slate-700 focus:border-purple-500 pl-10 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <MessageSquare
                                className="absolute left-3 top-4 text-slate-500"
                                size={18}
                            />
                            <Textarea
                                name="message"
                                placeholder="Your message"
                                className="min-h-[150px] bg-slate-800/50 border-slate-700 focus:border-purple-500 pl-10 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={isSending}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98] flex items-center justify-center space-x-2"
                        >
                            <span>
                                {isSending
                                    ? 'Sending'
                                    : 'Send Message'}
                            </span>
                            <Send size={18} />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default ContactSection;
