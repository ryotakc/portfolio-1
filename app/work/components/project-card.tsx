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
        <Card className="print:shadow-none flex flex-col transition duration-500 hover:shadow-2xl hover:scale-105"
        style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '0.75rem',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        }}>
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
            <CardContent>
                <div className="relative w-full h-48">
                    <AspectRatio ratio={3 / 2}>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-md"
                        />
                    </AspectRatio>
                </div>
            </CardContent>
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


