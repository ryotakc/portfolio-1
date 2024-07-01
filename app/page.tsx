import ClockWidget from "@/components/clock";
import MarqueeWidget from "@/components/marquee";
import { ModeToggle } from "@/components/mode-toggle";
import PageTitle from "@/components/page-title";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import YouTubePlayerWidget from "@/components/youtube-player";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <PageTitle title="Welcome to my portfolio!!">
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
      </PageTitle>
      <div className="container">
        <div className="grid lg:grid-rows-2 grid-flow-col gap-4">
          <Card className="lg:row-span-2 lg:col-span-3 p-4"> {/* Added padding for better layout */}
            <div className="relative w-full h-0 pb-[56.25%]"> {/* Maintain aspect ratio of 16:9 */}
              <div className="absolute inset-0">
                <YouTubePlayerWidget />
              </div>
            </div>
          </Card>
          <Card className="lg:row-span-1 lg:col-span-1">
            <div className="flex flex-col items-center justify-center h-full">
              <ClockWidget />
            </div>
          </Card>
          <Card className="lg:row-span-1 lg:col-span-1">
            <div className="flex flex-col items-center justify-center h-full">
              <ModeToggle />
            </div>
          </Card>
        </div>
        <Card className="row-span-2 lg:col-span-2 mt-4">
          <div className="flex flex-col items-center justify-center h-full">
            <MarqueeWidget />
          </div>
        </Card>        
      </div>
    
    </div>

  );
}
