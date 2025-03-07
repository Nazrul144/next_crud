
import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const PATCH = async(request, {params})=>{
    const db = await connectDB();
    const updatedDoc = await request.json();
    const bookingCollection = db.collection("myProducts")

    console.log("Params ID:", params.id);
    console.log("Params ID:", params.id);
    console.log("Params ID:", params.id);

    try {
        const res = await bookingCollection.updateOne({_id: new ObjectId(params.id)},{
            $set:{
                ...updatedDoc
            },
        },
    {
        upsert: true
    })
    return Response.json({message: "Updated Products", response: res}, {status: 200})
    } catch (error) {
        return Response.json({message: "Somethings went wrong"}, {status: 400})
    }
}


