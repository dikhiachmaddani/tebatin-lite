import { createContext } from 'react';
import { Auth, User } from '../../modules/auth/type';
import { CartItem } from '../../modules/product/type';
import { TaskManagement } from '../../modules/task-managment/type';

export interface GeneralContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;

    tasks: TaskManagement[];
    addTask: (task: TaskManagement) => void;
    toggleTaskCompletion: (id: string) => void;
    removeTask: (id: string) => void;

    user: User[];
    addUser: (user: User) => void;

    loginUser: (credentials: Auth) => boolean;
    loggedInUser: User | null;
    logoutUser: () => void;
}

export const GeneralContext = createContext<GeneralContextType | undefined>(undefined);