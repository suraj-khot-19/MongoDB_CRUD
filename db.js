import mongoose from "mongoose"

const uri = "mongodb+srv://suraj:the-khot@database.qfr6rnq.mongodb.net/mongo-crud?retryWrites=true&w=majority&appName=database"

const connectMongo = async () => {
    try {
        const connect = await mongoose.connect(uri)
        console.log("connected to mongodb ", connect.connection.host)
    } catch (error) {
        console.log(error)
    }
}

export default connectMongo;                                   