import Link from "next/link"
import Typing from "./typing"

export default function PageTitle({
    // title,
    children
}: {
    // title: string,
    children: React.ReactNode
}) {
    return (
    <div className="py-20 flex items-center">
        <div className="container">
            {children}
        </div>
    </div>
    )
}
