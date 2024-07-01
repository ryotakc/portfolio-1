import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-20 flex items-center">
        <div className="container">
          <h1 className="font-bold text-primary/90 text-4xl mb-5 lg:text-6xl">Welcome to my Portfoilo!</h1>
          <p className="text-muted-foreground mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita quod asperiores fugit amet! Adipisci rem tempore delectus excepturi, voluptatem maiores. Nisi possimus minus suscipit similique eos consequuntur culpa? Doloribus.
          </p>
          <div className="flex gap-3 font-semibold">
            <Link href="https://cv-leo.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button>My CV</Button>
            </Link>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Button>GitHub</Button>
            </Link>
          </div>
        </div>
    </div>
  );
}
