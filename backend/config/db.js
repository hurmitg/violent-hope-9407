const mongoose = require("mongoose");

let mongo_Url = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongo_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected`);
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
};

module.exports = connectDB;
