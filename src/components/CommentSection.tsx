"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Link from "next/link";
import Comment from "./Comment";

const CommentSection = () => {
    const { status } = useSession();
    return (
        <div>
            {status === "authenticated" && (
                <>
                    <Textarea
                        placeholder="Enter your comment..."
                        className="mb-4 w-[100%] md:w-[60%]"
                    />
                    <Button className=" mb-6 w-[25%] md:w-[15%]">Post</Button>
                </>
            )}

            {status === "unauthenticated" && (
                <h1 className="text-[24px] my-12">
                    {" "}
                    <Link href={"/login"} className="text-blue-500 underline font-bold">
                        {" "}
                        Login{" "}
                    </Link>{" "}
                    to post your comment
                </h1>
            )}
            <h1 className="text-2xl mb-6">Comments:</h1>
            <div>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
};

export default CommentSection;
