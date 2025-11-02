import mongoose, { Schema, Document } from "mongoose";

export interface INote extends Document {
  title: String;
  content: String;
}

const noteSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<INote>("Note", noteSchema);
