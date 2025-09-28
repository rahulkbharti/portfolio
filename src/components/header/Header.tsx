"use client";
import Image from "next/image";
import { ModeToggle } from "../theme-switch";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
    const { theme } = useTheme();
    return (
        <header className="w-full">
            <div className="container mx-auto flex pt-2 justify-between items-center gap-36">
                <div className="flex items-center space-x-2">
                    <Link href="/" >
                        {theme === "dark" ? <Image src={"/logo_dark.png"} alt="Logo" width={50} height={50} /> :
                            <Image src={"/logo.png"} alt="Logo" width={50} height={50} />}
                    </Link>
                </div>
                <nav className="flex justify-between items-center w-full">
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="#about" className="hover:underline">About</Link></li>
                        <li><Link href="#projects" className="hover:underline">Projects</Link></li>
                        <li><Link href="#contact" className="hover:underline">Contact</Link></li>
                    </ul>
                    <ModeToggle />
                </nav>
            </div>
        </header>
    )
}
export default Header;  