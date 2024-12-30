'use client';

import React from 'react';
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

const ContactSection = () => {
    return (
        <section className="py-16 relative z-10 overflow-hidden">
            <Card className="max-w-2xl mx-auto bg-slate-900/80 text-slate-200 border-slate-800 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-purple-500/10 relative z-10">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-3xl font-bold text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Get in Touch
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-center">
                        Have a question or want to work together? Send
                        me a message!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
                                    size={18}
                                />
                                <Input
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
                                placeholder="Your message"
                                className="min-h-[150px] bg-slate-800/50 border-slate-700 focus:border-purple-500 pl-10 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98] flex items-center justify-center space-x-2"
                        >
                            <span>Send Message</span>
                            <Send size={18} />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default ContactSection;
