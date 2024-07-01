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


export default function Work() {

    return (
        <div className="container">
            <PageTitle title="Work">
                <p className="text-muted-foreground mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, necessitatibus id. Minima, velit debitis quo aliquam quidem aspernatur, odit ipsum odio adipisci optio corporis modi nihil distinctio dignissimos eveniet est.
                </p>
                <div className="flex gap-3 font-semibold">
                    <a href="https://cv-leo.vercel.app" target="_blank" rel="noopener noreferrer">
                        <Button>My CV</Button>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <Button>GitHub</Button>
                    </a>
                </div>
            </PageTitle>

            <SectionTitle title="Projects" subTitle="My Projects">
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                    <ProjectDialog {...data.projectDialog[0]}   />
                    {/* <Dialog>
                        <DialogTrigger>
                            {data.projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                            ))}
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-row-reverse gap-3 font-semibold ">
                                <Button>URL</Button>
                                <Button>GitHub</Button>
                            </div>
                        </DialogContent>
                    </Dialog> */}
                </div>
            </SectionTitle>
        </div>
    )
}
