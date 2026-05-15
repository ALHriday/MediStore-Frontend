"use client"

import useOrdersData from "@/lib/hooks/useOrdersData";
import { CartItem, Item } from "@/lib/types/types";

const Orders = () => {
    const { data } = useOrdersData();

    const orderData = data?.flatMap((item: CartItem) => item.orderItems);
    // const subTotal = orderdata?.reduce((acc: number, item: Item) => acc + item.price * item.quantity, 0);


    return (
        <div className="w-8/12 mx-auto flex flex-col bg-slate-100 shadow-md m-4 rounded-md">
            <div className="p-4 bg-amber-200 rounded-md">
                <h1 className="font-bold">Your Ordered Items</h1>
            </div>

            <div className="p-4">
                <div className="grid grid-cols-6 font-bold border-b-4 pb-2">
                    <h1 className="col-span-4">Title</h1>
                    <p className="col-span-1">Quantity</p>
                    <p className="col-span-1">Price</p>
                </div>
                {orderData && orderData?.map((item: Item) => <div className="grid grid-cols-6 justify-between items-center gap-4 py-2 border-b-2" key={item?.id}>
                    <h1 className="col-span-4">{item?.title}</h1>
                    <p className="col-span-1">{item.price} x {item.quantity}</p>
                    <p className="col-span-1">{item.price * item.quantity}</p>
                </div>)}
                {/* <div className="border-t-4 pb-2">
                    <div className="grid grid-cols-7 font-bold py-6">
                        <h1 className="col-span-5"></h1>
                        <p className="col-span-2">Sub Total: {subTotal}</p>
                    </div>
                </div> */}
            </div >
        </div>
    );
};

export default Orders;