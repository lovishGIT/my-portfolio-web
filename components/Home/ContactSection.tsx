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

const ContactSection = () => {
    return (
        <section className="py-16">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>
                        Have a question or want to work together? Send
                        me a message!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Input placeholder="Name" />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div>
                            <Input placeholder="Subject" />
                        </div>
                        <div>
                            <Textarea
                                placeholder="Your message"
                                className="min-h-[150px]"
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default ContactSection;
