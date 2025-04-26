export type TaskManagement = {
    id: string;
    name: string;
    task: string;
    is_done: boolean;
}
export type TaskManagementResponse = {
    task: TaskManagement[];
};
