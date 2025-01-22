require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const PORT = 3007;

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", authRoutes);
app.use("/events", eventRoutes);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Error starting the server:", err);
    }
};

startServer();
