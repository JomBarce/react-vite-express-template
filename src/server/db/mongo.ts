import mongoose from "mongoose";

let isConnected = false;

export async function connectMongo() {
    if (isConnected) return;

	const MONGO_URI = process.env.MONGO_URI;
	if (!MONGO_URI) throw new Error("Missing MONGO_URI in environment variables");

	try {
		const con = await mongoose.connect(MONGO_URI);
        isConnected = con.connections[0].readyState === 1;
		console.log(`MongoDB connected: ${con.connection.host}`);
	} catch(error) {
		console.error("MongoDB connection failed:", error);
	}
}