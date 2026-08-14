import prisma from "../../lib/prisma.js";

export const createUser = async (data: {
  name: string;
  email: string;
  age?: number;
}) => {
  const user = await prisma.user.create({
    data,
  });

  return user;
};

export const getUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

export const updateUser = async (
  id: string,
  data: {
    name?: string;
    email?: string;
    age?: number;
  },
) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });

  return user;
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
};
