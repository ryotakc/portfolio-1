import Link from "next/link"

export default function PageTitle({
    title,
    children
}: {
    title: string,
    children: React.ReactNode
}) {
    return (
    <div className="py-20 flex items-center">
        <div className="container">
            <h1 className="font-bold text-primary/90 text-4xl mb-5 lg:text-6xl">{title}</h1>
            
            {children}
        </div>
    </div>
    )
}
