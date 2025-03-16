import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
