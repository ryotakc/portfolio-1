import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-32 flex items-center">
        <div className="container">
          <h1 className="font-bold text-primary/90 text-4xl mb-5 lg:text-6xl">Welcome to my Portfoilo!</h1>
          <p className="text-muted-foreground mb-6">
            Hello, I&apos;m Ryota Kato. I&apos;m a full-stack developer and Photographer based in Vancouver Canada. I have a passion for web development and love to create new things. Also I&apos;m always looking for new opportunities to learn and grow.
          </p>
          <div className="flex gap-3 font-semibold">
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Button>GitHub</Button>
            </Link>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Button>My CV</Button>
            </Link>
          </div>
        </div>
    </div>
  );
}
