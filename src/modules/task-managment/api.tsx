import axios from "axios";
import { TaskManagementResponse } from "./type";

export const getListTaskManagement = async () => {
    return await axios.get<TaskManagementResponse>(`/data/data-task.json`);
}