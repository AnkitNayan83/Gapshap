import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const limit = 3;
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const cat = searchParams.get("cat");
    let pageNo: number;
    if (page == null) pageNo = 1;
    else pageNo = parseInt(page);

    // To find total number of post and posts we can use transaction keyword
    // transaction keyword allows us to make multiple queries at same time

    const query = {
        take: limit,
        skip: limit * (pageNo - 1),
        where: {
            ...(cat && { catSlug: cat }),
        },
    };

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where }),
        ]);
        return new NextResponse(JSON.stringify({ message: "success", posts, count }), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Server not responding" }), {
            status: 500,
        });
    }
};
