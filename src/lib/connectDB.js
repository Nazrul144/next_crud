import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async ()=>{
    if(db) return db;
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      db = client.db('nextCRUD')
      return db;
}