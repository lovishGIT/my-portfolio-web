import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
    const skills = {
        Frontend: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'HTML/CSS',
        ],
        Backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
        Tools: ['Git', 'Docker', 'AWS', 'Vercel'],
    };

    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">
                Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(skills).map(
                    ([category, skillList]) => (
                        <Card key={category}>
                            <CardHeader>
                                <CardTitle>{category}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {skillList.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};

export default SkillsSection;
