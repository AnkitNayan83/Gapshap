import { Input } from "@/components/ui/input";
import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/PostCard";
import Link from "next/link";

type Prop = {
    params: { categories: string };
};

const page = ({ params }: Prop) => {
    const cat = params.categories;
    return (
        <div className="min-h-[100vh]">
            {/* search bar */}

            <div className="flex items-center justify-between w-[100%] mt-12">
                <div className="flex items-center gap-4 w-[60%]">
                    <Input
                        type="text"
                        id="text"
                        placeholder="Enter to search"
                        className="py-6 text-[20px] placeholder:text-[20px]"
                    />
                    <Button className="p-6">Search</Button>
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-[180px] py-6">
                            <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="coding">Coding</SelectItem>

                                <SelectItem value="politics">Politics</SelectItem>

                                <SelectItem value="college">College</SelectItem>

                                <SelectItem value="placements">Placements</SelectItem>

                                <SelectItem value="pineapple">My Blogs</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
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
                <Button className="w-[10%]">Previous</Button>
                <Button className="w-[10%]">Next</Button>
            </div>
        </div>
    );
};

export default page;
