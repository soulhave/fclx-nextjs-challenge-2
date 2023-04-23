import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const prisma = new PrismaClient();
    const chats = await prisma.chat.findMany({
        select: {
            id: true,
            message: true,
        }});
        
    return NextResponse.json(chats)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const prisma = new PrismaClient();
    
    const chatCreated = await prisma.chat.create({
        data: body
    });

    return NextResponse.json(chatCreated)
}

