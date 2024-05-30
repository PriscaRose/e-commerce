import { B as Bus } from './bookSeat_lnmxtZ2Z.mjs';
import mongoose from 'mongoose';

const MONGO_URI = "mongodb+srv://priscaroseline10:yathoy1997@cluster0.3jxkbsw.mongodb.net/booking_bus?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.info("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};
const db = mongoose.connection;

await connectDB();
const GET = async () => {
  if (db.readyState !== 1) {
    return new Response(
      JSON.stringify({ message: "MongoDB connection is not established" }),
      {
        status: 500
      }
    );
  }
  try {
    const buses = await Bus.find().exec();
    return new Response(
      JSON.stringify(
        buses.map((bus) => bus.toObject({ getters: true }))
      ),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to fetch buses" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

export { GET as G, db as d, index as i };
