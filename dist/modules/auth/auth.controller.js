import { registerUser, loginUser } from "./auth.service.js";
export const registerController = async (req, res, next) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
};
export const loginController = async (req, res, next) => {
    try {
        const result = await loginUser(req.body);
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
export const logoutController = async (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Logout successful",
    });
};
//# sourceMappingURL=auth.controller.js.map