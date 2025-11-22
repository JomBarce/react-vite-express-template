import mongoose from "mongoose";

export async function connectMongo() {
	const MONGO_URI = process.env.MONGO_URI;
	if (!MONGO_URI) throw new Error("Missing MONGO_URI in environment variables");

	try {
		const con = await mongoose.connect(MONGO_URI);
		console.log(`MongoDB connected: ${con.connection.host}`);
	} catch(error) {
		console.error("MongoDB connection failed:", error);
	}
}
