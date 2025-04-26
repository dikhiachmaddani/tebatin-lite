import { useQuery } from "@tanstack/react-query";
import { getListProduct } from "../../../../modules/product/api";

export function useGetListProduct() {
    const listProduct = useQuery({
        queryKey: ["all-list-product"],
        queryFn: () => getListProduct()
    });
    return listProduct;
}