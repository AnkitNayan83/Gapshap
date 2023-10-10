import React from "react";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import { Post } from "@/utils/types";

type Prop = {
    page: number;
};

const getData = async (page: number) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Server not working");
    }

    return res.json();
};

const TrendingPosts = async ({ page }: Prop) => {
    const data = await getData(page);
    const hasPrev = page > 1;
    const hasNext = 3 * (page - 1) + 3 < data.count;
    return (
        <div id="recent">
            <h1 className="text-[32px] font-bold">Recent Posts</h1>
            <div>
                {data?.posts.map((post: Post) => (
                    <PostCard post={post} />
                ))}
            </div>
            <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
        </div>
    );
};

export default TrendingPosts;
