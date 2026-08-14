import type { Request, Response } from "express";

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "./user.service.js";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error,
    });
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get users",
      error,
    });
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get user",
      error,
    });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const user = await updateUser(id, req.body);

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update user",
      error,
    });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const user = await deleteUser(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error,
    });
  }
};
