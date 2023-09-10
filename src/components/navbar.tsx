"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import AuthLinks from "./authLinks"
import Link from "next/link"


const Navbar = () => {
    const { setTheme } = useTheme()

    return (
        <div className="flex items-center my-6">
            <div className=" items-center gap-2 md:flex-1 hidden md:hidden lg:flex">
                <Image src={"/facebook.png"} width={30} height={30} alt="facebook" className="cursor-pointer" />
                <Image src={"/instagram.png"} width={30} height={30} alt="facebook" className="cursor-pointer" />
                <Image src={"/whatsapp.png"} width={30} height={30} alt="image from pngtree.com" className="cursor-pointer" />
                <Image src={"/youtube.png"} width={30} height={30} alt="facebook" className="cursor-pointer" />
            </div>
            <div>
                <Link href="/">
                    <h1 className="font-bold text-[22px] md:text-[36px]">GapShap</h1>
                </Link>
            </div>
            <div className="flex items-center gap-4 flex-1 justify-end cursor-pointer">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <span className="hidden md:inline hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2">HomePage</span>
                <span className="hidden md:inline hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2">Contact</span>
                <span className="hidden md:inline hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2">About</span>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar