import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div
            className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between py-4 border-t-4"
            id="footer"
        >
            <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-4">
                    <Image src={"/favicon.png"} width={100} height={100} alt="logo" />
                    <h1 className="font-bold text-2xl">GapShap</h1>
                </div>
                <div>
                    For queries contact me at <strong>ankitnayan83@gmail.com</strong>{" "}
                </div>
            </div>
            <div className="flex flex-col items-center flex-1">
                <h1 className="text-xl font-bold">Quick Links</h1>
                <div className="font-semibold flex flex-wrap gap-10 md:gap-14 mt-10">
                    <span className="cursor-pointer">Home</span>
                    <span className="cursor-pointer">FAQ</span>
                    <span className="cursor-pointer">Profile</span>
                    <span className="cursor-pointer">Create</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <h1 className="font-bold">Follow us at</h1>
                <div className="flex items-center gap-4 mt-10">
                    <Image
                        src={"/facebook.png"}
                        width={30}
                        height={30}
                        alt="facebook"
                        className="cursor-pointer"
                    />
                    <Image
                        src={"/instagram.png"}
                        width={30}
                        height={30}
                        alt="facebook"
                        className="cursor-pointer"
                    />
                    <Image
                        src={"/whatsapp.png"}
                        width={30}
                        height={30}
                        alt="image from pngtree.com"
                        className="cursor-pointer"
                    />
                    <Image
                        src={"/youtube.png"}
                        width={30}
                        height={30}
                        alt="facebook"
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
