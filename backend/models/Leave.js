import mongoose from "mongoose";

const LeaveSchema = new mongoose.Schema(
  {
    eventName: { 
      type: String, 
      required: true,
      set: (v) => v.toString()  // Converts any incoming value to string
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "leaves",  // Ensure this references the correct user model
      required: true,
    },
    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    status: { type: String, default: "Pending" },
    certificate: { type: String, default: "" },  // Default empty string if it's a URL path
  },
  { timestamps: true }
);

export const Leave = mongoose.model("Leave", LeaveSchema);
