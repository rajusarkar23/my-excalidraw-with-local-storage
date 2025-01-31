import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("db connected!!!");
        const host = connection.connection.host
        console.log("Host", host);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default dbConnect;