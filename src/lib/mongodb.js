import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://sukhrobbekodilov136:dtAQUEB5frJe0ygo@truelitechcontact.8zkdc.mongodb.net/?retryWrites=true&w=majority&appName=truelitechcontact";

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your .env.local file");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "truelitech",
    }).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
