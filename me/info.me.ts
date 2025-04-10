import { ProjectType } from '@/types';
import image from '@/me/MyImage.png';
import { StaticImageData } from 'next/image';

export const name: string = 'Lovish Bansal';

export const meta_description: string =
    'Professional Web Developer & A Tech Enthusiast';
export const meta_keywords: string[] = [
    'Lovish Bansal',
    'Web Developer',
    'Software Development',
    'Engineer',
    'Developer',
    'AI',
    'Web 2',
    'Web 3',
    'Blockchain',
    'Full Stack',
    'MERN Stack',
    'Next JS',
    'React JS',
    'Express JS',
    'Node JS',
    'TypeScript',
];
export const My_Description: string = `I live in Chandigarh! I'm a professional Full Stack Web Developer & A Tech Enthusiast.`;

export const my_email: string = 'lovishbansal441@gmail.com';
export const linkedin_Url: string = 'https://www.linkedin.com/in/lovish2584-profile/';
export const github_Url: string = 'https://www.github.com/lovishGIT';

export const resume_Url: string =
    'https://docs.google.com/document/d/1SYYjMdkjYfwireEyCdCj_j8-Ioyo9HYFIqHYHlGIKPc' +
    '/export?format=pdf&cros_files=false&tab=t.0';

export const AllProjectDocument: string | undefined =
    'https://silken-print-fd1.notion.site/Lovish-Bansal-Projects-144a7ba042a780f8bcafc7a6fab8bf94';

export const my_image: StaticImageData = image;

export const projects: ProjectType[] = [
    {
        title: 'AutoBot (BEE Project)',
        description: `A full-stack web application for automating and documenting Project Management Flawlessly.`,
        technologies: [
            'React',
            'Express',
            'MongoDB',
            'Socket.io',
            'NodeMailer',
            'Vercel',
        ],
        link: 'https://auto-bot-six.vercel.app',
        upcoming: false,
    },
    {
        title: 'IEEE CIET Website',
        description:
            'Event Management, Blog Posting, Real-time Chat, Chat Bot & more.',
        technologies: [
            'React',
            'Next.js',
            'Node.js',
            'Socket.io',
            'TypeScript',
            'NodeMailer',
            'NeonDB',
            'PostgreSQL',
        ],
        upcoming: true,
    },
    {
        title: 'White Nest (E-Commerce)',
        description:
            'E-commerce platform with payment integration and Scheduling.',
        technologies: [
            'Next.js',
            'Prisma ORM',
            'PostgreSQL',
            'TypeScript',
            'NodeMailer',
            'Socket.io'
        ],
        link: 'https://github.com/Dumb-Crews/whiteNest',
        upcoming: true,
    },
    {
        title: 'Socio AI (Amazon Smabhav)',
        description:
            'AI-based Social Media Posting to Amazon Ready Product Listings.',
        technologies: [
            'Docker',
            'AWS',
            'Next.js',
            'Express',
            'MongoDB',
            'TypeScript',
            'Flask',
            'Python',
        ],
        link: 'https://github.com/Dumb-Crews/socio-ai',
        upcoming: false,
    },
    {
        title: 'Skill Mingle (Hack2Hire)',
        description:
            'A platform for improving open source collaborations and skill sharing.',
        technologies: [
            'Next.js',
            'Express',
            'NeonDB',
            'Clerk',
            'TypeScript',
            'Github API',
            'Gmail API',
        ],
        link: 'https://skillmingle.vercel.app',
        upcoming: false,
    },
];

export const skills = {
    'Programming Languages': [
        'C/C++',
        'Java',
        'Python',
        'JavaScript',
        'TypeScript',
        'Solidity',
        'EJS',
        'jQuery',
    ],
    'Frontend Development': [
        'React.js',
        'Next.js',
        'Redux',
        'Radix',
        'Shad CN',
        'Emotion CSS',
        'Tailwind CSS',
    ],
    'Backend & Full-Stack Development': [
        'Express.js',
        'Appwrite',
        'REST',
        'GraphQL',
        'Clerk',
        'TanStack',
        'Prisma (ORM)',
    ],
    Databases: [
        'MongoDB',
        'PostgreSQL',
        'Firebase',
        'Suprabase',
        'Neon DB',
    ],
    'Containerization & Deployment': [
        'Docker',
        'Kubernetes',
        'Minikube',
        'YAML',
        'KubeCTL',
        'AWS (EC2, Lambda)',
    ],
    'Web3 Development': [
        'Etherium Blockchain',
        'Solidity Smart Contracts',
        'Truffle',
        'Ganache',
    ],
};