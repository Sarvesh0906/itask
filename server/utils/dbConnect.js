import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default dbConnect;
