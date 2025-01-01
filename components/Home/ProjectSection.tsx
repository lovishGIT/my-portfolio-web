'use client';
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AllProjectDocument, projects } from '@/me/info.me';
import { RiNotionFill } from 'react-icons/ri';

const gradient = [
    'from-blue-500 to-purple-500',
    'from-purple-500 to-pink-500',
    'from-pink-500 to-red-500',
];

const ProjectsSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const initialProjectCount = 6;
    const hasMoreProjects = projects.length > initialProjectCount;

    const visibleProjects = isExpanded
        ? projects
        : projects.slice(0, initialProjectCount);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            setTimeout(() => {
                window.scrollBy({
                    top: 200,
                    behavior: 'smooth',
                });
            }, 100);
        }
    };

    return (
        <section className="py-8 sm:py-12 md:py-16 relative z-10 px-4 sm:px-6 md:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex flex-wrap gap-2 items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Featured Projects
                {AllProjectDocument?.trim() &&
                    AllProjectDocument.trim().length > 0 && (
                        <>
                            <Button
                                variant="outline"
                                className="p-2 bg-slate-900/50 border-slate-800 hover:bg-slate-800/50 text-white
                            transition-all duration-300
                            hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                                onClick={() =>
                                    window.open(
                                        AllProjectDocument?.trim(),
                                        '_blank'
                                    )
                                }
                            >
                                <RiNotionFill />
                            </Button>
                            <div className="hidden sm:block transition-all animate-pulse duration-600 justify-self-end text-white text-base">{`<<< Project Doc`}</div>
                        </>
                    )}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {visibleProjects.map((project, index) => (
                    <Card
                        key={index}
                        className="bg-[#0e1628] border-slate-800 backdrop-blur-sm
                        transition-all duration-300
                        hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]
                        hover:-translate-y-1
                        animate-in fade-in-0 slide-in-from-bottom-4"
                    >
                        <CardHeader className="p-4 sm:p-6">
                            <CardTitle
                                className={`text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r ${
                                    gradient[index % 3]
                                }`}
                            >
                                {project.title}
                            </CardTitle>
                            <CardDescription className="text-sm sm:text-base text-slate-400 capitalize">
                                {project.description
                                    .split(' ')
                                    .slice(0, 10)
                                    .join(' ')}
                                {project.description.split(' ')
                                    .length > 10 && '...'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                                {project.technologies.map(
                                    (tech: String, index: number) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className="text-xs sm:text-sm border-slate-700 bg-slate-800/50 text-white"
                                        >
                                            {tech}
                                        </Badge>
                                    )
                                )}
                            </div>
                            <Button
                                className={`w-full bg-gradient-to-r ${
                                    gradient[index % 3]
                                } hover:opacity-90 transition-opacity text-sm sm:text-base`}
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                >
                                    {project?.upcoming
                                        ? `Upcoming`
                                        : `View Project`}
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {hasMoreProjects && (
                <div className="mt-8 sm:mt-12 text-center">
                    <Button
                        onClick={toggleExpand}
                        variant="outline"
                        className="group bg-slate-900/50 border-slate-800 hover:bg-slate-800/50
                        transition-all duration-300 text-sm sm:text-base
                        hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    >
                        <span className="mr-2">
                            {isExpanded
                                ? 'Show Less'
                                : `Show All (${projects.length})`}
                        </span>
                        {isExpanded ? (
                            <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:-translate-y-1" />
                        ) : (
                            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-y-1" />
                        )}
                    </Button>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;
