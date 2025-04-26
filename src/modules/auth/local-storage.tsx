import { User } from './type';

export const getUserFromLocalStorage = (): User[] => {
    return JSON.parse(localStorage.getItem('user') || '[]');
};

export const saveUserToLocalStorage = (user: User[]) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const getAuthFromLocalStorage = (): User => {
    return JSON.parse(localStorage.getItem('auth') || 'null');
};

export const saveAuthToLocalStorage = (user: User) => {
    localStorage.setItem('auth', JSON.stringify(user));
};

export const removeAuthFromLocalStorage = () => {
    localStorage.removeItem("auth");
};