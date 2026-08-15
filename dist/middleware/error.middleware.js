export const errorMiddleware = (error, _req, res, _next) => {
    console.error(error);
    if (error instanceof Error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
};
//# sourceMappingURL=error.middleware.js.map