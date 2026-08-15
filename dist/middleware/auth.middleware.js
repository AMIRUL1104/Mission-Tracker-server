import jwt from "jsonwebtoken";
export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        // Check Authorization header
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        // Check Bearer format
        const [type, token] = authHeader.split(" ");
        if (type !== "Bearer" || !token) {
            return res.status(401).json({
                success: false,
                message: "Invalid authorization format",
            });
        }
        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach authenticated user information
        req.user = {
            userId: decoded.userId,
        };
        next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};
//# sourceMappingURL=auth.middleware.js.map