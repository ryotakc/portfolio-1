
export type ProjectCard = {
    title: string;
    techStack: string[];
    // description: string;
    image: string;
};

export type ProjectDialog = {
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
    urlLink: string;
}

export type Data = {
    projects: ProjectCard[];
    projectDialog: ProjectDialog[];
};
