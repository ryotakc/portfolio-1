import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from "@/app/layout"
import Link from "next/link"

export function SheetMenu() {
    return (
        <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent className="text-primary">
            <SheetHeader>
            <SheetTitle className="text-primary">Menu</SheetTitle>
            <SheetDescription>
                Select a menu from the list below.
            </SheetDescription>
            </SheetHeader>
            <div className="font-semibold">
                <ul className="flex flex-col items-center justify-center gap-6 py-10">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <SheetClose asChild>
                            <Button variant="ghost" asChild>
                                <Link href={item.href}>{item.label}</Link>
                            </Button>
                        </SheetClose>
                        </li>
                    ))}
                </ul>
            </div>
        </SheetContent>
        </Sheet>
    )
}
