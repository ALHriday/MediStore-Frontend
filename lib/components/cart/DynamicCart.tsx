"use client"

import dynamic from "next/dynamic";

const CartComponent = dynamic(() => import("@/lib/components/cart/Cart"), { ssr: false });

const DynamicCart = () => {
    return <CartComponent />
};

export default DynamicCart;