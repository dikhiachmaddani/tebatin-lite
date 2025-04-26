export type Product = {
    id: string;
    title: string;
    img: string;
    description: string;
    price: number;
    sold: number;
    rating: number;
    buyer_rating: number;
    stock: number;
};

export type CartItem = Product & {
    quantity: number;
}

export type ProductResponse = {
    product: Product[];
};