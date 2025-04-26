import axios from "axios";
import { UsersResponse } from "./type";

export const getListUser = async () => {
    return await axios.get<UsersResponse>(`/data/data-user.json`);
}