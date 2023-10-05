import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Featured = () => {
    return (
        <div>
            <h1 className="text-[44px] md:text-[54px] mt-14">
                {" "}
                <span className="font-bold">Are you up for some GapShap 😊.</span> Discover great
                stories and creative ideas on variety of topics.
            </h1>

            <div className="mb-20">
                <div className="relative w-[100%] md:flex-1 h-[40vh]">
                    <Image
                        src={"/head2.png"}
                        alt="featured"
                        fill={true}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Featured;
