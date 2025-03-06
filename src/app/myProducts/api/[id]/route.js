import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async(request, {params})=>{
    const db = await connectDB()
    const productCollection = await db.collection('myProducts')

    try {
        const res = await productCollection.findOne({_id: new ObjectId(params.id)})
        return NextResponse.json({message: 'Single Data received successfully', res}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Something went wrong to fetch single data'}, {status: 303})
    }
}