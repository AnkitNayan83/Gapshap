import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Banner = () => {
    return (
        <div className="flex items-center h-[50vh]">
            <div className="flex-1 ml-8 flex flex-col items-start gap-6">
                <h1 className="font-bold text-[32px]">Do you know?</h1>
                <span className="font-semibold text-[28px]">
                    A gapshaps a day keeps tension away. 😁
                </span>
                <Button className="text-[24px]">Explore Now</Button>
            </div>
            <div className="flex-1 relative h-[80%]">
                <Image src={"/know.png"} alt="thinking" fill={true} />
            </div>
        </div>
    );
};

export default Banner;
