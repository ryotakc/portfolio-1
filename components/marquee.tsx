// import { getI18n } from "@/locales/server";
import {
    SiAdobelightroom,
    SiAdobelightroomclassic,
    SiAdobelightroomclassicHex,
    SiArc,
    SiBun,
    SiCloudflare,
    SiCplusplus,
    SiGithub,
    SiJavascript,
    SiNextdotjs,
    SiPrisma,
    SiRadixui,
    SiReact,
    SiShadcnui,
    SiStripe,
    SiTailwindcss,
    SiVercel,
} from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import Marquee from "react-fast-marquee";

const icons = [
    {
        icon: <SiNextdotjs />,
        label: "Next.js",
    },
    {
        icon: <SiBun />,
        label: "Bun",
    },
    {
        icon: <SiShadcnui />,
        label: "Shadcn/ui",
    },
    {
        icon: <SiReact />,
        label: "React",
    },
    {
        icon: <SiTailwindcss />,
        label: "Tailwind CSS",
    },
    {
        icon: <SiJavascript />,
        label: "JavaScript",
    },
    {
        icon: <SiVercel />,
        label: "Vercel",
    },
    {
        icon: <SiGithub />,
        label: "GitHub",
    },
    {
        icon: <SiAdobelightroomclassic />,
        label: "Lightroom Classic",
    },
    {
        icon: <SiCplusplus />,
        label: "C++",
    },
    {
        icon: <SiArc />,
        label: "Arc",
    },
];

export default async function MarqueeWidget() {
    // const t = await getI18n();
    
    return (
        <>
        <div className="py-8 w-full overflow-hidden">
            {/* <span className="sr-only">{t("usedInThisApp")}</span> */}
            <Marquee
            gradient
            gradientColor="hsl(var(--widget))"
            className="text-muted-foreground"
            >
            {icons.map((icon) => (
                <div key={icon.label} className="mx-6">
                <Slot className="w-10 h-10">{icon.icon}</Slot>
                </div>
            ))}
            </Marquee>
        </div>
        </>
    );
}
