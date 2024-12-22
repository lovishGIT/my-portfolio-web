import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Project 1',
            description:
                'A full-stack web application built with Next.js and MongoDB',
            technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
            link: '#',
        },
        {
            title: 'Project 2',
            description: 'Real-time chat application using WebSocket',
            technologies: ['React', 'Node.js', 'Socket.io'],
            link: '#',
        },
        {
            title: 'Project 3',
            description:
                'E-commerce platform with payment integration',
            technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
            link: '#',
        },
    ];

    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="hover:scale-105 transition-transform"
                    >
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>
                                {project.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="outline"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            <Button asChild>
                                <a href={project.link}>
                                    View Project
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
