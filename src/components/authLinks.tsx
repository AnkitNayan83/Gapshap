"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AuthLinks = () => {
    const { data, status } = useSession();
    console.log(data);
    const [open, setOpen] = useState(false);
    return (
        <>
            {status === "unauthenticated" ? (
                <Link
                    href="/login"
                    className="hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2"
                >
                    Login
                </Link>
            ) : (
                <>
                    <Link
                        href="/createPost"
                        className="hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2"
                    >
                        Write
                    </Link>

                    <Link href={"/"}>
                        <Image
                            src={data && data.user?.image ? data.user?.image : "/nouser.png"}
                            width={30}
                            height={30}
                            alt="user"
                            className="object-cover rounded-[50%] border-2 border-[hsl(var(--foreground))]"
                        />
                    </Link>

                    <span
                        onClick={() => signOut()}
                        className="hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2"
                    >
                        Logout
                    </span>
                </>
            )}

            <div
                className="w-[20px] h-[16px] flex flex-col justify-between cursor-pointer md:hidden"
                onClick={() => setOpen(!open)}
            >
                <div className="w-[100%] h-[2px] bg-current"></div>
                <div className="w-[100%] h-[2px] bg-current"></div>
                <div className="w-[100%] h-[2px] bg-current"></div>
            </div>
            {open && (
                <div className="absolute top-[64px] left-0 h-[calc(100vh_-_64px)] w-[100%] flex flex-col items-center justify-center gap-[70px] text-[28px] z-[999] bg-[hsl(var(--background))]">
                    <Link
                        href="/"
                        className="hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2"
                    >
                        Homepage
                    </Link>
                    <Link
                        href="/"
                        className="hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2"
                    >
                        About
                    </Link>
                    <Link
                        className="hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2"
                        href="/"
                    >
                        Contact
                    </Link>
                    {status === "unauthenticated" ? (
                        <Link
                            className="hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2"
                            href={"/"}
                        >
                            Login
                        </Link>
                    ) : (
                        <>
                            {" "}
                            <Link
                                href="/"
                                className="hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2"
                            >
                                Write
                            </Link>
                            <span className="hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] rounded-md p-2">
                                Logout
                            </span>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default AuthLinks;
