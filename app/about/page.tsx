import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function About() {
    return (
        <div className="py-32 flex items-center">
            <div className="container">
                <h1 className="font-bold text-primary/90 text-4xl mb-5 lg:text-6xl">Photography</h1>
                <p className="text-muted-foreground mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, necessitatibus id. Minima, velit debitis quo aliquam quidem aspernatur, odit ipsum odio adipisci optio corporis modi nihil distinctio dignissimos eveniet est.
                </p>
                <Button>
                    <Link href="/contact">Contact</Link>
                </Button>
            </div>
        </div>

    )
}
