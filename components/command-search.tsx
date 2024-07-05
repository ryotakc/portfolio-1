"use client"

import * as React from "react"
import {
    AudioLines,
    Calculator,
    Calendar,
    CodeXml,
    CreditCard,
    File,
    House,
    Images,
    Moon,
    Search,
    Settings,
    Smile,
    Sun,
    User,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Button } from "./ui/button"
import Link from "next/link"
import { useTheme } from "next-themes"

export function CommandHome() {
    const [open, setOpen] = React.useState(false)
    const { setTheme } = useTheme()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const handleSelect = (url: string) => {
        setOpen(false)
        window.location.href = url
    }

    return (
        <>
            <Button variant="outline" className="gap-2 text-primary/70" onClick={() => setOpen(true)}>
                <div className="hidden sm:block">Search...</div>
                <Search className="h-4 w-4 block sm:hidden" />
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-primary opacity-100 hidden sm:block">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem onSelect={() => handleSelect('/')}>
                            <House className="mr-2 h-4 w-4" />
                            Home
                        </CommandItem>
                        <CommandItem onSelect={() => handleSelect('/work')}>
                            <CodeXml className="mr-2 h-4 w-4" />
                            Work
                        </CommandItem>
                        <CommandItem onSelect={() => handleSelect('/photography')}>
                            <Images className="mr-2 h-4 w-4" />
                            Photography
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Project">
                        <CommandItem onSelect={() => handleSelect('https://leok.vercel.app')}>
                            <User className="mr-2 h-4 w-4" />
                            Portfolio
                            {/* <CommandShortcut>⌘P</CommandShortcut> */}
                        </CommandItem>
                        <CommandItem onSelect={() => handleSelect('https://example.com')}>
                            <AudioLines className="mr-2 h-4 w-4" />
                            Demo
                            {/* <CommandShortcut>⌘D</CommandShortcut> */}
                        </CommandItem>
                        <CommandItem onSelect={() => handleSelect('https://cv-leo.vercel.app/')}>
                            <File className="mr-2 h-4 w-4" />
                            CV
                            {/* <CommandShortcut>⌘C</CommandShortcut> */}
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Theme">
                        <CommandItem onSelect={() => setTheme("light")}>
                            <Sun className="mr-2 h-4 w-4" />
                            Light
                        </CommandItem>
                        <CommandItem onSelect={() => setTheme("dark")}>
                            <Moon className="mr-2 h-4 w-4" />
                            Dark
                        </CommandItem>
                        <CommandItem onSelect={() => setTheme("system")}>
                            <Settings className="mr-2 h-4 w-4"/>
                            System
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
