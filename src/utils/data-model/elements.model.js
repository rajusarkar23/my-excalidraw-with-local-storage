import mongoose, { Schema } from "mongoose";

const elementsSchema = new Schema({
    id: {
        type: String,
        required: true
    }
})

export const ExcalidrawElement = mongoose.models.Element || mongoose.model("ExcalidrawElement", elementsSchema)