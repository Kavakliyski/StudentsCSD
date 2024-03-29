import mongoose from "mongoose";


mongoose.set('strictQuery', false);

const connectMongoDB = async () => {

    console.log("Mongoose: Connecting to MongoDB...");

    try {

        await mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_ATLAS}`, {
            dbName: 'StudentsCSD',
            retryWrites: true,
            w: 'majority'
        });
        console.log("Mongoose: Connected to MongoDB! :)");
    } catch (err) {

        console.log("Mongoose: Error connecting to MongoDB! :(");
        console.error('ERROR', err);
    };

};

export default connectMongoDB;