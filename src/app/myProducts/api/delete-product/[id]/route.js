import { connectDB } from "@/lib/connectDB"
import { message } from "antd";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async(request, {params})=>{
    const db = await connectDB();
    const productCollection = await db.collection('myProducts')
    try {
        const res = await productCollection.deleteOne({_id: new ObjectId(params.id)})
        return NextResponse.json({message: 'Product deleted Successfully', res}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Something went wrong with delete'}, {status: 303})
    }
}