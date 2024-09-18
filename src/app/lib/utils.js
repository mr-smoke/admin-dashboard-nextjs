import mongoose from "mongoose";

const connection = {};
export const connectToDatabase = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
