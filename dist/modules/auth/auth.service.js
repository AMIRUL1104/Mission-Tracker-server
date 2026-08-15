import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma.js";
export const registerUser = async (data) => {
    const { name, email, password, age } = data;
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (existingUser) {
        throw new Error("User already exists with this email");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            ...(age !== undefined && { age }),
        },
    });
    const { password: _password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
export const loginUser = async (data) => {
    const { email, password } = data;
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        throw new Error("Invalid email or password");
    }
    const token = jwt.sign({
        userId: user.id,
    }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            age: user.age,
        },
    };
};
//# sourceMappingURL=auth.service.js.map