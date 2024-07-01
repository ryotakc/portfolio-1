import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
    
interface Props {
        title: string;
        image: string;
        techStack: readonly string[];
}

export function ProjectCard({ title, image, techStack }: Props) {
        return (
        <Card className="print:shadow-none flex flex-col">
            <CardHeader className="pb-3">
                <div className="space-y-1">
                    <CardTitle className="text-base">
                        <p className="inline-flex items-center gap-1 hover:underline">
                            {title} 
                            <ArrowUpRight className="print:hidden" size={14} />
                        </p>
                    </CardTitle>
                </div>
            </CardHeader>
            {techStack.length > 0 && (
            <CardContent className="mt-auto flex">
                <div className="mt-2 flex flex-wrap gap-1">
                {techStack.map((stack) => (
                    <Badge variant="outline" key={stack}>
                    {stack}
                    </Badge>
                ))}
                </div>
            </CardContent>
            )}
        </Card>
        );
}



// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"

// export function ProjectCard() {
//     return (
//     <Card>
//         <CardHeader>
//             <CardTitle>Card Title</CardTitle>
//             <CardDescription>Card Description</CardDescription>
//         </CardHeader>
//         <CardContent>
//             <p>Card Content</p>
//         </CardContent>
//         <CardFooter>
//             <p>Card Footer</p>
//         </CardFooter>
//     </Card>
//     )
// }
