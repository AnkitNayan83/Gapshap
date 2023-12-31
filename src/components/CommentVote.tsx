import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CommentVote = () => {
    return (
        <div>
            <div className="flex items-center justify-center border-2 rounded-md w-[150px] md:w-[150px] mt-5 h-[25px]">
                <span className="border-r-2 flex justify-center items-center w-[25%] hover:bg-green-500 rounded-md cursor-pointer h-[100%]">
                    <AddIcon />
                </span>
                <span className="flex justify-center w-[50%]">0</span>
                <span className="border-l-2 flex justify-center items-center w-[25%] hover:bg-red-500 rounded-md cursor-pointer h-[100%]">
                    <RemoveIcon />
                </span>
            </div>
        </div>
    );
};

export default CommentVote;
