const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongooseURL = process.env.MONGOOSE_URL;

    if (!mongooseURL) {
      console.warn("⚠️  MONGOOSE_URL not found. Database connection will retry when env is set.");
      return;
    }

    await mongoose.connect(mongooseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    // Don't exit - allow server to run without DB for now
    console.log("⚠️  Server will continue without database. Add MONGOOSE_URL to .env to enable.");
  }
};

module.exports = connectDB;
