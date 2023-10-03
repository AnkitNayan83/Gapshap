import Image from "next/image";
import React from "react";
import Votes from "./Votes";

const Comment = () => {
    return (
        <div className="mb-12">
            {/* top */}
            <div className="flex items-center gap-6 mb-6">
                <Image
                    src={"/favicon.png"}
                    width={60}
                    height={60}
                    alt="logo"
                    className="rounded-md"
                />
                <div className="flex flex-col items-start">
                    <span className="font-bold text-xl">Test user</span>
                    <span>12/05/20</span>
                </div>
            </div>
            <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
    );
};

export default Comment;
