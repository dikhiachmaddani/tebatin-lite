import { ReactNode } from 'react';
import { GeneralContext } from '../../common/context/GeneralContext';
import { useTasks } from '../../features/(authenticated)/task-managment/hooks/use-list-task-management.hook';
import { useUser } from '../../features/(unauthenticated)/auth/hooks/use-user.hook';
import { useCart } from '../../features/(unauthenticated)/home/hooks/use-cart.hook';

interface GeneralProviderProps {
    children: ReactNode;
}

export function GeneralProvider({ children }: GeneralProviderProps) {
    const { cartItems, addToCart, removeFromCart } = useCart();
    const { tasks, addTask, removeTask, toggleTaskCompletion } = useTasks();
    const { user, addUser, loginUser, loggedInUser, logoutUser } = useUser();

    return (
        <GeneralContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,

            tasks,
            addTask,
            removeTask,
            toggleTaskCompletion,

            user,
            addUser,

            loginUser,
            loggedInUser,
            logoutUser
        }}>
            {children}
        </GeneralContext.Provider>
    );
};