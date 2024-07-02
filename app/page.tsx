import ClockWidget from "@/components/clock";
import MarqueeWidget from "@/components/marquee";
import { ModeToggle } from "@/components/mode-toggle";
import PageTitle from "@/components/page-title";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Row 1: YouTubePlayerWidget and Calendar */}
          <Card className="lg:col-span-2 lg:row-span-2 p-4">
            <div className="relative w-full h-0 pb-[56.25%]">
              <div className="absolute inset-0">
                <YouTubePlayerWidget />
              </div>
            </div>
          </Card>
          <Card className="lg:col-span-1 lg:row-span-2">
            <div className="flex flex-col items-center justify-center h-full">
              <Calendar />
            </div>
          </Card>
          {/* Row 2: ClockWidget, ModeToggle, and MarqueeWidget */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:col-span-3">
            <Card className="col-span-1 lg:col-span-1 flex py-4 sm:py-4">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <ClockWidget />
              </div>
            </Card>
            <Card className="col-span-1 lg:col-span-1 flex py-4 sm:py-4">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <ModeToggle />
              </div>
            </Card>
            <Card className="col-span-2 lg:col-span-3 flex">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <MarqueeWidget />
              </div>
            </Card>
          </div>
        </div>
      </div>
    
    </div>

  );
}
