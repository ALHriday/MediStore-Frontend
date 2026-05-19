"use client"

import { useEffect, useState } from "react";
import { CartItemsData } from "../types/types";

const useCart = () => {
    const [cartItems, setCartItems] = useState<CartItemsData[]>(() => {
        if (typeof window !== 'undefined') {
            try {
                const storedData = localStorage.getItem('cartItems');
                return storedData ? JSON.parse(storedData) : [];
            } catch {
                return [];
            }
        }
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    return { cartItems, setCartItems, cartItemsLen: cartItems?.length || 0 };
};

export default useCart;