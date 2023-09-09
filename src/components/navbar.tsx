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


const Navbar = () => {
    const { setTheme } = useTheme()

    return (
        <div className="flex items-center mt-6">
            <div className=" items-center gap-2 flex-1 hidden md:hidden lg:flex">
                <Image src={"/facebook.png"} width={30} height={30} alt="facebook" />
                <Image src={"/instagram.png"} width={30} height={30} alt="facebook" />
                <Image src={"/tiktok.png"} width={30} height={30} alt="facebook" />
                <Image src={"/youtube.png"} width={30} height={30} alt="facebook" />
            </div>
            <div>
                <h1 className="font-bold text-[22px] md:text-[36px]">GapShap</h1>
            </div>
            <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end cursor-pointer">
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
                <span>HomePage</span>
                <span>Contact</span>
                <span>About</span>
                <span>Login</span>
            </div>
        </div>
    )
}

export default Navbar