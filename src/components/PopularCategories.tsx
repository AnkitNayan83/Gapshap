import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularCategories = () => {
    return (
        <div className="flex flex-col gap-10 my-10">
            <h1 className="font-bold text-[32px]">Popular Categories </h1>

            <div className="flex flex-wrap gap-16 mb-4">
                <Link href={`/posts/coding`}>
                    <div className="flex justify-center items-center gap-2 bg-blue-200 rounded-md w-[80vw] md:w-[220px] h-[75px] py-[15px] hover:shadow-[_0px_0px_40px_-15px] cursor-pointer bg-opacity-10">
                        <Image
                            src={"/posts/coding.png"}
                            width={50}
                            height={50}
                            alt=""
                            className="object-cover"
                        />
                        <span className="text-xl font-bold">Coding</span>
                    </div>
                </Link>
                <Link href={"/posts/politics"}>
                    <div className="flex justify-center items-center gap-2 bg-red-300 rounded-md w-[80vw] md:w-[220px] py-[15px] hover:shadow-[_0px_0px_40px_-15px] cursor-pointer h-[75px] bg-opacity-10">
                        <Image
                            src={"/posts/politics.png"}
                            width={50}
                            height={50}
                            alt=""
                            className="object-cover"
                        />
                        <span className="text-xl font-bold">Politics</span>
                    </div>
                </Link>

                <Link href={"/posts/college"}>
                    <div className="flex justify-center items-center gap-2 bg-green-300 rounded-md w-[80vw] md:w-[220px] py-[15px] hover:shadow-[_0px_0px_40px_-15px] cursor-pointer h-[75px] bg-opacity-10">
                        <Image
                            src={"/posts/colleges.png"}
                            width={50}
                            height={50}
                            alt=""
                            className="object-cover"
                        />
                        <span className="text-xl font-bold">Colleges</span>
                    </div>
                </Link>

                <Link href={"/posts/placement"}>
                    <div className="flex justify-center items-center gap-2 bg-yellow-300 rounded-md w-[80vw] md:w-[220px] py-[15px] hover:shadow-[_0px_0px_40px_-15px] cursor-pointer h-[75px] bg-opacity-10">
                        <Image
                            src={"/posts/placements.png"}
                            width={50}
                            height={50}
                            alt=""
                            className="object-cover"
                        />
                        <span className="text-xl font-bold">Placements</span>
                    </div>
                </Link>

                <Link href={"/posts/blogs"}>
                    <div className="flex justify-center items-center gap-2 bg-pink-300 rounded-md w-[80vw] md:w-[220px] py-[15px] hover:shadow-[_0px_0px_40px_-15px] cursor-pointer h-[75px] bg-opacity-10">
                        <Image
                            src={"/posts/blogs.jpg"}
                            width={50}
                            height={50}
                            alt=""
                            className="object-cover"
                        />
                        <span className="text-xl font-bold">My Blogs</span>
                    </div>
                </Link>

                <Link href={"/posts/misc"}>
                    <div className="flex justify-center items-center gap-2 bg-red-300 bg-opacity-10 rounded-md w-[80vw] md:w-[220px] py-[15px] hover:shadow-[_0px_0px_40px_-15px] cursor-pointer h-[75px]">
                        <Image
                            src={"/posts/blogs.jpg"}
                            width={50}
                            height={50}
                            alt=""
                            className="object-cover"
                        />
                        <span className="text-xl font-bold">Miscellaneous</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default PopularCategories;
