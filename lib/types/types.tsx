
export interface UserData {
    name: string;
    phone: string;
    image: string;
}


export interface Medicine {
    id: string;
    title: string;
    image: string;
    price: number;
    stock: number;
    manufacturer: string;
    description: string;
}

export interface Categories {
    category: {
        id: string;
        name: string;
        createdAt: Date;
    };
}

export interface Category {
    id: string;
    name: string;
    createdAt: Date;
}

export interface CartItem {
    name: string;
    orderItems: Item[];
    phone: string;
}

export interface Item {
    id: string;
    medicineId: string;
    orderId: string;
    price: number
    quantity: number
    title: string;
}