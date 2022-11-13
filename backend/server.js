const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const PORT = process.env.PORT || 8081;

const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const { notFound, errorHandler } = require("./middlewares/error.middleware");
const cartRoutes = require("./routes/cart.routes");

const app = express();
app.use(express.json());

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
var cookieParser = require("cookie-parser");
app.use(cookieParser());
// APIs

app.get("/", (req, res) => res.send("API is running"));

app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`server started on port ${PORT}`);
});
