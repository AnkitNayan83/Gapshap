import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Post } from "@/utils/types";
import Link from "next/link";

type Prop = {
    post: Post;
};

const PostCard = ({ post }: Prop) => {
    return (
        <div key={post.id}>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-20">
                <div className="relative w-[100%] md:flex-1 h-[35vh]">
                    <Image
                        src={"/culture.png"}
                        alt="featured"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-6 items-start flex-1">
                    <span className="bg-blue-500 bg-opacity-10 rounded-md px-2">
                        <h1 className=" text-red-500">{post.catSlug}</h1>
                    </span>
                    <h1 className="font-bold text-[32px]">{post.title}</h1>
                    <p className="text-justify text-lg">{post.desc}</p>
                    <Link href={`/posts/${post.catSlug}/${post.id}`}>
                        <Button className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
                            Read More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
