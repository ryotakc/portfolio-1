import { AccordionHome } from "@/components/accordion-home";
import ClockWidget from "@/components/clock";
import MarqueeWidget from "@/components/marquee";
import { ModeToggle } from "@/components/mode-toggle";
import PageTitle from "@/components/page-title";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import YouTubePlayerWidget from "@/components/youtube-player";
import { SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import image from "../public/profile.webp"
// import Typewriter from 'typewriter-effect';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Typing from "@/components/typing";

export default function Home() {
  const word = ['Loves Coding!', 'Loves Photography!', 'Loves Learning!'];

  return (
    <div>
      <PageTitle >
        <Typing word={word}>
          Ryota Kato
        </Typing>
        <p className="text-muted-foreground mb-6">
          Hello! Welcome to <span className="font-semibold" color="blue">Ryota Kato</span>&apos;s Portfolio! <br />
          I&apos;m a web developer and photographer based in Vancouver, Canada. I&apos;m a passionate coder and photographer. I love to create and capture beautiful things. Feel free to reach out to me! I&apos;m looking forward to hearing from you! 
        </p>
        <div className="flex gap-3 font-semibold">
          <Link href="https://cv-leo.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <Button>My CV</Button>
          </Link>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <Button>GitHub</Button>
          </Link>
        </div>
      </PageTitle>
      <div className="container mb-16">
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
        <div className="grid h-[200px] w-[260px] items-center justify-center gap-4 mt-8 border-2 border-zinc-900 rounded-xl">
          <a href="https:/x.com" target="_blank" rel="noopener noreferrer">
            <Card className="h-[100px] w-[190px] dark:shadow-[0px_1px_0px_0px_rgba(255,_255,_255,_0.3)_inset,0_2px_8px_rgba(0,0,0,0.8)] shadow-[0px_1px_0px_0px_rgba(255,_255,_255,_0.3)_inset,0_2px_8px_rgba(0,0,0,0.3)] p-3.5 lg:p-4 gap-4 group transition duration-700 flex bg-gradient-to-tr from-black/20 items-center relative rounded-3xl font-bold text-white " color="#292929">
              <SiX width={32} height={32} viewBox="0 0 24 24" className="absolute translate-y-4 -z-10 group-hover:rotate-12 group-hover:translate-x-4 group-hover:translate-y-0.5 will-change-transform bottom-full right-4 duration-700 transition origin-center">X</SiX>
              <div className="overflow-hidden group-hover:-translate-x-0.5 group-hover:-translate-y-1 transition group-hover:scale-110 duration-700 group-hover:-rotate-3 relative size-12 lg:size-14 rounded-xl outline-2 outline-white outline flex items-center gap-2">
                <Image src={image} alt="profile" fill className="rounded-xl" />
                
              </div>
              <div className="items-center text-center justify-center">
                <p>I&apos;m on X</p>
              </div>
            </Card>              
          </a>
    
        </div>


      </div>

      {/* <div className="container">
        <AccordionHome />
      </div> */}
    </div>

  );
}
