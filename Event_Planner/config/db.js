const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://admin:hello@cluster0.fubno.mongodb.net/eventsDB?retryWrites=true&w=majority");
        console.log("Connected to MongoAtlas!");
    } catch(error){
        console.error("Problems with connecting to database...");
        process.exit(1);
    }
};

module.exports = connectDB;