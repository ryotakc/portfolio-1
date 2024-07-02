import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"; 
import { ProjectCard } from "./project-card";
import data  from "@/data/en";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
    title: string;
    description: string;
    techStack: readonly string[];
    projectCard: {
        title: string;
        image: string;
        techStack: readonly string[];
    };
    githubLink: string;
    urlLink: string;
}


export function ProjectDialog({ title, description, techStack, projectCard, githubLink, urlLink }: Props) {
    return (
        <Dialog>
            <DialogTrigger>
                <ProjectCard {...projectCard} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
                </DialogHeader>
                <div>
                    <div className="mt-2 flex flex-wrap gap-1">
                    {techStack.map((stack) => (
                        <Badge variant="outline" key={stack}>
                        {stack}
                        </Badge>
                    ))}
                    </div>
                </div>
                <div className="flex flex-row-reverse gap-3 font-semibold ">
                    <Button>
                        <a href={urlLink} target="_blank" rel="noopener noreferrer">URL</a>
                    </Button>
                    <Button>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
