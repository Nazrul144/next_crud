import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    const db = await connectDB();
    const productCollection = await db.collection('myProducts');

    try {
        const item = await request.json()
        const res = await productCollection.insertOne(item)
        return NextResponse.json({message: 'Product inserted successfully', res}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Fail to post data'}, {status: 303})
    }
}