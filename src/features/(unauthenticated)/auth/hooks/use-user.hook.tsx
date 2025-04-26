import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getListUser } from "../../../../modules/auth/api";
import { getAuthFromLocalStorage, getUserFromLocalStorage, removeAuthFromLocalStorage, saveAuthToLocalStorage, saveUserToLocalStorage } from "../../../../modules/auth/local-storage";
import { Auth, User } from "../../../../modules/auth/type";

export function useGetListUser() {
    const listTaskManagement = useQuery({
        queryKey: ["all-list-user"],
        queryFn: () => getListUser()
    });
    return listTaskManagement;
}

export const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const { data, isLoading } = useGetListUser();
    const [loggedInUser, setLoggedInUser] = useState<User | null>(getAuthFromLocalStorage());

    useEffect(() => {
        if (!isLoading && data) {
            const localStorageUser = getUserFromLocalStorage();

            if (localStorageUser.length > 0) {
                setUsers(localStorageUser);
            } else {
                saveUserToLocalStorage(data.data.users);
                setUsers(data.data.users);
            }
        }
    }, [data, isLoading]);

    const addUser = (user: User) => {
        const updatedUser = [...users, user];
        setUsers(updatedUser);
        saveUserToLocalStorage(updatedUser);
    };

    const checkUser = (credentials: Auth) => {
        const localStorageUser = getUserFromLocalStorage();
        const userInLocalStorage = localStorageUser.find(
            (user: User) => user.email === credentials.email && user.password === credentials.password
        );
        if (userInLocalStorage) return userInLocalStorage;
        return null;
    };

    const loginUser = (credentials: Auth): boolean => {
        const userToLogin = checkUser(credentials);
        if (userToLogin) {
            setLoggedInUser(userToLogin);
            saveAuthToLocalStorage(userToLogin);
            return true;
        } else {
            setLoggedInUser(userToLogin);
        }
        return false;
    };

    const logoutUser = () => {
        setLoggedInUser(null);
        removeAuthFromLocalStorage();

    };

    return {
        user: users,
        addUser,
        isLoading,
        loginUser,
        loggedInUser,
        logoutUser
    };
};
