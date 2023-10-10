import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/PostCard";
import CategoryList from "@/components/CategoryList";
import { Post } from "@/utils/types";
import Pagination from "@/components/Pagination";
type Prop = {
    params: { categories: string; page: string };
};

const getData = async (page: number, cat: string) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat}`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Server not working");
    }

    return res.json();
};

const Posts = async ({ params }: Prop) => {
    const cat = params.categories;
    const page = parseInt(params.page) || 1;
    const { posts, count } = await getData(page, cat);
    const hasPrev = page > 1;
    const hasNext = 3 * (page - 1) + 3 < count;

    return (
        <div className="min-h-[100vh]">
            {/* search bar */}

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-[100%] mt-12">
                <div className="flex items-center gap-4 w-[100%] md:w-[60%] mb-4 md:mb-0">
                    <Input
                        type="text"
                        id="text"
                        placeholder="Enter to search"
                        className="py-6 text-[20px] placeholder:text-[20px]"
                    />
                    <Button className="p-6">Search</Button>
                </div>
                <div>
                    <CategoryList current={cat} />
                </div>
            </div>

            {/* title */}
            <div className="mt-10">
                <h1 className="font-bold text-[44px] capitalize">{cat}:</h1>
            </div>

            {/* posts */}
            <div className="flex flex-col gap-4 mb-6">
                {count === 0 && <h1>no post to show</h1>}
                {posts.map((post: Post) => {
                    return <PostCard post={post} />;
                })}
            </div>
            {/* pagination */}
            <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
        </div>
    );
};

export default Posts;
