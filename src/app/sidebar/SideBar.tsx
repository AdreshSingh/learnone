import Link from "next/link"
import { ReactNode } from "react"
import { BsCassette } from "react-icons/bs"
import { FaFire, FaSun, FaVideo } from "react-icons/fa"
import { FaPhp } from "react-icons/fa6"
import { TiHtml5 } from "react-icons/ti"

export const SideBar = () => {
    return (
        <div className="fixed w-16 h-screen m-0 flex flex-col shadow-sm  bg-primary text-secondary">
            <SideIcon icon={<FaSun size={32} />} />
            <SideIcon icon={<FaFire size={32} />} />
            <SideIcon icon={<TiHtml5 size={32} />} />
            <SideIcon icon={<BsCassette size={32} />} />
            <SideIcon icon={<FaPhp size={32} />} />
            <Link href={"/videopage"} ><SideIcon icon={<FaVideo size={32} />} text="for videos" /></Link>
        </div>
    )
}

const SideIcon = ({ icon, text = "work in Progress ⚙ " }: { icon: ReactNode, text?: string }) => {
    return <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
}