export type Auth = {
    email: string;
    password: string;
};

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type UsersResponse = {
    users: User[];
};