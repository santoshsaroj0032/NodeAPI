import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
        .connect("mongodb+srv://santoshsaroj:kQv8zSrUF8AVCyQu@cluster0.mkmko1i.mongodb.net/", {
            dbName: "backendapi",
        })
        .then(() => console.log("Database Connected"))
        .catch((e) => console.log(e));
};