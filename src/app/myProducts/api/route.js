import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async()=>{
    const db = await connectDB();
    const productsCollection = await db.collection('myProducts')

    try {
        const res = await productsCollection.find().toArray();
        return NextResponse.json({message: 'Successfully myProducts data received', res},{status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Somethings went wrong to fetch myProducts data'}, {status: 303})
    }
}