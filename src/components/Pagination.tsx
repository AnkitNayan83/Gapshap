import React from "react";
import { Button } from "./ui/button";

const Pagination = () => {
    return (
        <div className="flex items-center justify-between mt-8">
            <Button className="bg-red-500 hover:bg-red-400 text-white w-[25%] md:w-[13%]">
                Previous
            </Button>
            <Button className="bg-red-500 hover:bg-red-400 text-white md:w-[13%]">Next</Button>
        </div>
    );
};

export default Pagination;
