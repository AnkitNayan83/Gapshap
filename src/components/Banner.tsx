import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center h-[50vh]">
            <div className=" md:flex-1 ml-8 flex flex-col items-start gap-6">
                <h1 className="font-bold text-[32px]">Do you know?</h1>
                <span className="font-semibold text-[28px]">
                    A gapshaps a day keeps tension away. 😁
                </span>
                <Button className="text-[24px]">Explore Now</Button>
            </div>
            <div className="w-[100%] md:flex-1 relative h-[40vh] md:h-[80%]">
                <Image src={"/know.png"} alt="thinking" fill={true} />
            </div>
        </div>
    );
};

export default Banner;
