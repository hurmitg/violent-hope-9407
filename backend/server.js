const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const PORT = process.env.PORT || 8080;

const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const { notFound, errorHandler } = require("./middlewares/error.middleware");

const app = express();
app.use(express.json());

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// APIs

app.get("/", (req, res) => res.send("API is running"));

app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`server started on port ${PORT}`);
});
