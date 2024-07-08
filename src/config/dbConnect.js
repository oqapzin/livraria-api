import mongoose from "mongoose";

async function connectDB() {
    const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}${process.env.MONGO_DB_ADRESS}`
    mongoose.connect(url)
    return mongoose.connection
}



export default connectDB