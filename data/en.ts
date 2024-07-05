

import { Data } from "@/types/data";

const data: Data = {

    projects: [
        {
            title: 'Portfolio',
            techStack: [
                'React',
                'Next.js',
                'TailwindCSS',
                'TypeScript',
                'Vercel',
                'Shadcn/ui',
            ],
            // description: 'An environmental impact tracking app for individuals and small businesses',
            image: '/projectsPhoto/project1.jpg',
        },
        {
            title: 'Demo',
            techStack: [
                'Java',
                'Kotlin',
                'Android',
                'Java',
                'Kotlin',
                'Android',
            ],
            // description: 'An environmental impact tracking app for individuals and small businesses',
            image: '/photograph/pic2.jpg',
        }
    ],
    
    projectDialog: [
        {
                title: 'Portfolio',
                description:
                    'Personal Portfolio for my projects. Built with React, Next.js, TailwindCSS, TypeScript, Vercel, Shadcn/ui. It is hosted on Vercel. The source code is available on GitHub (Link below).',
                techStack: [
                    'React',
                    'Next.js',
                    'TailwindCSS',
                    'TypeScript',
                    'Vercel',
                    'Shadcn/ui',
        ],
        githubLink: 'https://github.com/ryotakc/portfolio-1',
        urlLink: '/',
        },
        {
            title: 'Demo',
            description:
                'An environmental impact tracking app for individuals and small businesses',
            techStack: [
                'Java',
                'Kotlin',
                'Android',
                'Java',
                'Kotlin',
                'Android',
        ],
        githubLink: 'https://github.com/',
        urlLink: 'https://github.com/',
        }
    ],
};

export default data;
