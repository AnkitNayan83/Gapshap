import React from "react";
import PostCard from "./PostCard";

const TrendingPosts = () => {
    return (
        <div>
            <h1 className="text-[32px] font-bold">Trending Posts:</h1>
            <div>
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    );
};

export default TrendingPosts;
