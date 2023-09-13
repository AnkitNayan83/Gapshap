import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/PostCard";
import CategoryList from "@/components/CategoryList";

type Prop = {
    params: { categories: string };
};

const page = ({ params }: Prop) => {
    const cat = params.categories;
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
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            {/* pagination */}
            <div className="flex items-center justify-between my-[6%]">
                <Button className="w-[40%] md:w-[10%]">Previous</Button>
                <Button className="w-[40%] md:w-[10%]">Next</Button>
            </div>
        </div>
    );
};

export default page;
