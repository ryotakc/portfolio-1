import PageTitle from "@/components/page-title";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { defaultOverrides } from "next/dist/server/require-hook";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ProjectCard } from "./components/project-card";
import data  from "@/data/en";
import { ProjectDialog } from "./components/project-dialog";
import Typing from "@/components/typing";



export default function Work() {
    const word = ['Web Development', 'UI/UX Design', 'Backend Development'];

    return (
        <div>
            <PageTitle>
                <Typing word={word}>
                    I&apos;m working on
                    <br className="md:hidden"/>
                </Typing>
                <p className="text-muted-foreground mb-6">
                    Here are some of the projects I have worked on. I have used a variety of technologies to build these projects. I am always looking for new projects to work on. 
                </p>
                <div className="flex gap-3 font-semibold">
                    <a href="https://cv-leo.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
                        <Button>My CV</Button>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
                        <Button>GitHub</Button>
                    </a>
                </div>
            </PageTitle>

            <SectionTitle title="Projects" subTitle="My Projects">
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
                    {data.projectDialog.map((projectDialog, index) => (
                        <ProjectDialog
                            key={index}
                            {...projectDialog}
                            projectCard={data.projects[index]}
                        />
                    ))}
                </div>
            </SectionTitle>
        </div>
    )
}
