import { TaskManagement } from './type';

export const getTasksFromLocalStorage = (): TaskManagement[] => {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
};

export const saveTasksToLocalStorage = (tasks: TaskManagement[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};