import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET =async () => {
    try {
        const cat = await prisma.category.findMany();
        return new NextResponse(JSON.stringify({ message: "success", cat }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Server not responding" }), { status: 500 });
    }
}