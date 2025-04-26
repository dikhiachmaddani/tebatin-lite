import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getListTaskManagement } from "../../../../modules/task-managment/api";
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "../../../../modules/task-managment/local-storage";
import { TaskManagement } from "../../../../modules/task-managment/type";

export function useGetListTaskManagement() {
    const listTaskManagement = useQuery({
        queryKey: ["all-list-task-management"],
        queryFn: () => getListTaskManagement()
    });
    return listTaskManagement;
}

export const useTasks = () => {
    const [tasks, setTasks] = useState<TaskManagement[]>([]);
    const { data, isLoading } = useGetListTaskManagement();

    useEffect(() => {
        if (!isLoading && data) {
            const localStorageTasks = getTasksFromLocalStorage();

            if (localStorageTasks.length > 0) {
                setTasks(localStorageTasks);
            } else {
                const tasksFromAPI = data.data.task;
                saveTasksToLocalStorage(tasksFromAPI);
                setTasks(tasksFromAPI);
            }
        }
    }, [data, isLoading]);

    const addTask = (task: TaskManagement) => {
        const updatedTasks = [...tasks, task];
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const toggleTaskCompletion = (id: string) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) return { ...task, is_done: !task.is_done };
            else return task;
        });
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const removeTask = (id: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    return {
        tasks,
        addTask,
        toggleTaskCompletion,
        removeTask,
        isLoading,
    };
};
