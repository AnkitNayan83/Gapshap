"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Prop = {
    page: number;
};

const Pagination = ({ page }: Prop) => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between mt-8">
            <Button
                onClick={() => router.push(`/?page=${page - 1}`)}
                className="bg-red-500 hover:bg-red-400 text-white w-[25%] md:w-[13%]"
            >
                Previous
            </Button>

            <Button
                className="bg-red-500 hover:bg-red-400 text-white md:w-[13%]"
                onClick={() => router.push(`/?page=${page + 1}`)}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
