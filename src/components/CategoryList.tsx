"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Prop = {
    current: String;
};

const CategoryList = ({ current }: Prop) => {
    const router = useRouter();
    return (
        <div>
            <select
                name="categories"
                onChange={(e) => router.push(`/posts/${e.target.value}`)}
                className="border-2 rounded-md p-2 w-[100%] bg-transparent"
            >
                <option
                    value="coding"
                    selected={current === "coding"}
                    className="bg-[hsl(var(--background))]"
                >
                    Coding
                </option>

                <option
                    value="college"
                    selected={current === "college"}
                    className="bg-[hsl(var(--background))]"
                >
                    College
                </option>
                <option
                    value="politics"
                    selected={current === "politics"}
                    className="bg-[hsl(var(--background))]"
                >
                    Politics
                </option>
                <option
                    value="placements"
                    selected={current === "placements"}
                    className="bg-[hsl(var(--background))]"
                >
                    Placements
                </option>
                <option
                    value="blogs"
                    selected={current === "blogs"}
                    className="bg-[hsl(var(--background))]"
                >
                    Blogs
                </option>
                <option
                    value="misc"
                    selected={current === "misc"}
                    className="bg-[hsl(var(--background))]"
                >
                    Misc
                </option>
            </select>
        </div>
    );
};

export default CategoryList;
