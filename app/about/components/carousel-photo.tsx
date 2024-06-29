'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

export function CarouselPhoto() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <Carousel
        plugins={[plugin.current]}
        className="w-full"
        >
        <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
                <div className="p-1">
                <Card>
                    <CardContent className="flex items-center justify-center p-1">
                        <AspectRatio ratio={3 / 2} className="w-full h-full">
                            <Image 
                                src={`/photograph/pic${index + 1}.jpg`} 
                                alt={`Image ${index + 1}`} 
                                className="rounded-md object-cover" 
                                layout="fill"
                            />
                        </AspectRatio>
                    </CardContent>
                </Card>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
    )
}
