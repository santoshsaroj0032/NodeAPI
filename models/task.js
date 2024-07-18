import mongoose from "mongoose";

const schema = new mongoose.schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isComlpeted: {
        type: Boolean,
        default: false,
    },

    user: {
        type: mongoose.schema.Types.objectId,
        ref: "User",
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

export const Task = mongoose.model("Task", schema);