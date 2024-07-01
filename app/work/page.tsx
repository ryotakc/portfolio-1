import PageTitle from "@/components/page-title";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { defaultOverrides } from "next/dist/server/require-hook";


export default function Work() {

    return (
        <div>
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
        </div>
    )
}
