import axios from "axios";
import { ProductResponse } from "./type";

export const getListProduct = async () => {
    return await axios.get<ProductResponse>(`/data/data-product.json`);
}

