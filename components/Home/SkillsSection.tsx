import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { skills } from '@/me/info.me';

const SkillsSection = () => {

    return (
        <section className="py-16 relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(skills).map(
                    ([category, skillList]) => (
                        <Card
                            key={category}
                            className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                        >
                            <CardHeader>
                                <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                    {category}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {skillList.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all"
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