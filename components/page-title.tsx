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
    <div className="pt-5 pb-20 flex items-center">
        <div className="container">
            {children}
        </div>
    </div>
    )
}
