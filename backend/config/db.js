const mongoose = require("mongoose");

let mongo_Url =
  "mongodb+srv://mytheresa:67ueSPMOdLfWcESa@cluster0.ibldi1m.mongodb.net/?retryWrites=true&w=majority";

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
