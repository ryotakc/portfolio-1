

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
            image: '/public/photograph/pic1.jpg',
        },
        {
            title: 'Portfolio-1',
            techStack: [
                'Java',
                'Kotlin',
                'Android',
                'Java',
                'Kotlin',
                'Android',
            ],
            // description: 'An environmental impact tracking app for individuals and small businesses',
            image: '/public/photograph/pic2.jpg',
        }
    ],
    
    projectDialog: [
        {
                title: 'Portfolio',
                description:
                    'An environmental impact tracking app for individuals and small businesses',
                techStack: [
                    'React',
                    'Next.js',
                    'TailwindCSS',
                    'TypeScript',
                    'Vercel',
                    'Shadcn/ui',
        ],
        },
        {
            title: 'Portfolio-1',
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
        }
    ],
};

export default data;
