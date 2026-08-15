export declare const createUser: (data: {
    name: string;
    email: string;
    age?: number;
}) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    age: number | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const getUsers: () => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    age: number | null;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const getUserById: (id: string) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    age: number | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const updateUser: (id: string, data: {
    name?: string;
    email?: string;
    age?: number;
}) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    age: number | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const deleteUser: (id: string) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    age: number | null;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=user.service.d.ts.map