"use client";

import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";

const CreatePost = () => {
    const [cat, setCat] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState<File>();
    const [text, setText] = useState("");

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        else {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div>
            {/* top */}
            <div>
                <ArrowBackIos className="text-[32px] cursor-pointer" />
            </div>

            {/* title */}
            <div className="mt-12">
                <input
                    type="text"
                    placeholder="Title"
                    className="text-[50px] bg-transparent border-none placeholder:text-gray-500 outline-none w-full"
                />
            </div>

            {/* image */}

            <div className="mt-6 flex items-center justify-between">
                {file ? (
                    <div className="flex items-center gap-4 text-2xl">
                        <h1>{file.name}</h1>{" "}
                        <CancelIcon className="cursor-pointer" onClick={() => setFile(undefined)} />{" "}
                    </div>
                ) : (
                    <label htmlFor="file" className="cursor-pointer text-2xl">
                        <FileUploadIcon className="text-gray-500 text-[32px]" /> Add Image
                    </label>
                )}
                <input
                    type="file"
                    name="file"
                    id="file"
                    className="hidden"
                    onChange={handelChange}
                />
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

            {/* textarea */}

            <div className="h-[20vh] mt-6">
                <ReactQuill
                    theme="snow"
                    value={text}
                    onChange={setText}
                    className="h-[100%] text-[24px]"
                />
            </div>

            {/* postButton */}

            <Button className="bg-green-400 hover:bg-green-500 mt-20 mb-12 w-[15%] text-[hsl(var(--foreground))] text-xl">
                Post
            </Button>
        </div>
    );
};

export default CreatePost;
