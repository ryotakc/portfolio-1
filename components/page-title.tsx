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
    <div className="pt-10 pb-20 flex items-center">
        <div className="container">
            {children}
        </div>
    </div>
    )
}
