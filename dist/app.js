import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "API is running",
    });
});
// API Routes
app.use("/api", routes);
// 404 Route
app.use((_req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});
// Global Error Handler
app.use(errorMiddleware);
export default app;
//# sourceMappingURL=app.js.map