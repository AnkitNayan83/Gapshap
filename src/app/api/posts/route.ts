import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const limit = 3;
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    let pageNo: number;
    if (page == null) pageNo = 1;
    else pageNo = parseInt(page);

    try {
        const posts = await prisma.post.findMany({
            take: limit,
            skip: limit * (pageNo - 1),
        });
        return new NextResponse(JSON.stringify({ message: "success", posts }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Server not responding" }), {
            status: 500,
        });
    }
};
