"use client";

import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import React, { useState } from "react";

const page = () => {
    const [cat, setCat] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    return (
        <div className="h-[calc(100vh_-_110px)]">
            {/* top */}
            <div className="flex items-center justify-between">
                <ArrowBackIos className="text-[32px] cursor-pointer" />
                <div>
                    <select
                        name="categories"
                        onChange={(e) => setCat(e.target.value)}
                        className="border-2 rounded-md p-2 w-[100%] bg-transparent"
                    >
                        <option value="" className="bg-[hsl(var(--background))]">
                            Category
                        </option>
                        <option value="coding" className="bg-[hsl(var(--background))]">
                            Coding
                        </option>
                        <option value="college" className="bg-[hsl(var(--background))]">
                            College
                        </option>
                        <option value="politics" className="bg-[hsl(var(--background))]">
                            Politics
                        </option>
                        <option value="placements" className="bg-[hsl(var(--background))]">
                            Placements
                        </option>
                        <option value="blogs" className="bg-[hsl(var(--background))]">
                            Blogs
                        </option>
                        <option value="misc" className="bg-[hsl(var(--background))]">
                            Misc
                        </option>
                    </select>
                </div>
            </div>

            {/* title */}
            <div className="mt-12">
                <input
                    type="text"
                    placeholder="Title"
                    className="text-[50px] bg-transparent border-none placeholder:text-gray-500 outline-none"
                />
            </div>

            <div className="mt-6">
                <label htmlFor="file" className="cursor-pointer">
                    <FileUploadIcon className="text-gray-500 text-[32px]" /> Add Image
                </label>
                <input type="file" name="file" id="file" className="hidden" />
            </div>
        </div>
    );
};

export default page;
