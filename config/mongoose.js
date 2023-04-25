const mongoose = require('mongoose');
const connectDB = async function(){
    try {
        await mongoose.connect("mongodb+srv://tyagimayank243:H35HBq4wkqaxGiKK@cluster0.rydvyzc.mongodb.net/polling-api?retryWrites=true&w=majority");
        console.log("Connected to the DB of Polling_Api");
    }catch (error) {
        console.log("Error in connecting to the database");
        return;
    }
}
connectDB();