"use client"

import { Button } from "@/components/ui/button";
import useCart from "@/lib/hooks/useCart";
import { Medicine } from "@/lib/types/types";
import toast from "react-hot-toast";

const AddToCart = ({ medicine }: { medicine: Medicine }) => {
    const { cartItems, setCartItems } = useCart();

    const handleAddToCart = async (medicine: Medicine) => {
        const { id, title, price } = medicine;

        setCartItems((prev) => {
            const exist = prev.find(item => item.id === id);
            if (exist) {
                return prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { id, title, price, quantity: 1 }];
        });
        toast.success(`${title} Added to the Cart.`);
    }
    const handleIncrementQuantity = (id: string) => {
        setCartItems(prev => {
            return prev.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
        })
    }
    const handleDecrementQuantity = (id: string) => {
        setCartItems(prev => {
            return prev.map(item => {
                if (item.id === id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })
        })
    }

    const currentMedicine = cartItems?.find(item => item.id === medicine.id);

    return (
        <div className="flex gap-4">
            <div className="flex gap-4 justify-center items-center">
                <Button disabled={currentMedicine?.quantity ? false : true} onClick={() => handleDecrementQuantity(medicine.id)}>-</Button>
                <span>{currentMedicine?.quantity || 0}</span>
                <Button disabled={currentMedicine?.quantity ? false : true} onClick={() => handleIncrementQuantity(medicine.id)}>+</Button>
            </div>
            <div>
                <Button disabled={currentMedicine?.quantity ? true : false} onClick={() => handleAddToCart(medicine)}> {currentMedicine?.quantity ? "Added to the Cart" : "Add to Cart"}</Button>
            </div>
        </div>
    );
};

export default AddToCart;