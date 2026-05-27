"use client"

import PrintComponent from "@/lib/components/PrintComponent";
import { Item, Order } from "@/lib/types/types";


const page = ({ order }: { order: Order }) => {

    const totalAmount = order?.orderItems.reduce((acc: number, item: Item) => acc + item.quantity * item.price, 0) || 0;

    return (
        <div>
            <div className="p-4 md:w-9/12 mx-auto border-2 my-6 rounded-md">
                <div>
                    <h1 className="text-center text-2xl my-2">Invoice</h1>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                    <div className="flex justify-between gap-4">
                        <h1>Invoice Id: {order?.id}</h1>
                        <p>Logo</p>
                    </div>
                    <div className="flex flex-col gap-1 text-md">
                        <h1 className="">Name: {order?.name.toUpperCase() || ''}</h1>
                        <h1 className="">Phone: {order?.phone}</h1>
                        <h1 className="">Created Date: {new Date(order?.createdAt).toLocaleDateString() || ''}</h1>
                    </div>

                    <div>
                        {order?.orderItems.map((item: Item) => <div key={item.id}>
                            <div className="grid grid-cols-11 justify-center items-center font-bold gap-4 py-2 border-2 text-center px-1 bg-orange-100">
                                <h1 className="col-span-5 text-start">Title</h1>
                                <h1 className="col-span-4"> Price & Quantity</h1>
                                <h1 className="col-span-1">Amount</h1>
                                <h1 className="col-span-1"></h1>
                            </div>
                            <div className="grid grid-cols-12 justify-center items-center sm:gap-2 py-1 border-2 px-1">
                                <h1 className="col-span-5">{item.title}</h1>
                                <div className="flex justify-center items-center gap-2 col-span-5 text-center">
                                    <h1 className="px-2">${item.price} x {item.quantity}</h1>
                                </div>
                                <div className="col-span-1 flex justify-center items-center text-center">
                                    <h1>{item.price * item.quantity}</h1>
                                </div>

                            </div>
                            <div className="grid grid-cols-12 items-center font-bold py-2 border-2 bg-gray-100">
                                <div className="col-span-7 sm:col-span-8 md:col-span-9"></div>
                                <div className="col-span-5 sm:col-span-4 md:col-span-3">Total Amount:  ${totalAmount}</div>
                            </div>
                        </div>)}
                    </div>
                    <div className="text-center">
                        <PrintComponent order={order} />
                    </div>
                </div>
            </div >

            <div>
                <button className="text-md px-4 py-2 border-2 bg-blue-500 rounded-md text-white font-semibold">Print</button>
            </div>
        </div>
    );
};

export default page;