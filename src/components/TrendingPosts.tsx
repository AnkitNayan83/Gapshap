import React from "react";
import PostCard from "./PostCard";
import { Button } from "./ui/button";
import Pagination from "./Pagination";
import { Post } from "@/utils/types";

type Prop = {
    page: number;
};

const getData = async (page: number) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`);

    if (!res.ok) {
        throw new Error("Server not working");
    }

    return res.json();
};

const TrendingPosts = async ({ page }: Prop) => {
    const data = await getData(page);
    console.log(data);

    return (
        <div>
            <h1 className="text-[32px] font-bold">Recent Posts</h1>
            <div>
                {data?.posts.map((post: Post) => (
                    <PostCard post={post} key={post.id} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default TrendingPosts;
