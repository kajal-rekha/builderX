import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BuilderSchema = new Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        components: {
            type: [String],
            required: true,
        },
        projectName: {
            type: String,
            default: "Untitled Project",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Builder ||
    mongoose.model("Builder", BuilderSchema);
