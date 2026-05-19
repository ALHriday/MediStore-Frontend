"use client"

import useUsers from "@/lib/hooks/useUsers";
import { Medicine, User } from "@/lib/types/types";
import Image from "next/image";
import { MdDeleteForever, MdUpgrade } from "react-icons/md";
import ModalComponent from "../modal/ModalComponent";
import { useState } from "react";
import LoadingComponent from "../LoadingComponent";
import useUserMedicine from "@/lib/hooks/useUserMedicine";
import { IoChevronUpCircleOutline } from "react-icons/io5";

const MedicineTable = () => {
    const { userMedicine, isLoading } = useUserMedicine();
    const [isOpen, setIsOpen] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    const handleDelete = () => {
        setIsOpen(false);
    }
    const handleUpdate = (id: string) => {
        console.log(id);
        setIsUpdate(false);
    }

    if (isLoading) {
        return <LoadingComponent text="Loading Medicines..." />
    }

    return (
        <div className="bg-white p-4 rounded-md shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-175">
                    <thead className="bg-cyan-800 text-white rounded-md shadow-md border-2 border-teal-400">
                        <tr>
                            <th className="px-6 py-4 text-left">Title & Image</th>
                            <th className="px-6 py-4 text-left">Manufacturer</th>
                            <th className="px-6 py-4 text-left">Price</th>
                            <th className="px-6 py-4 text-left">Stock</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userMedicine && userMedicine?.map((item: Medicine) => <tr key={item.id} className="border-b border-slate-100 hover:border-slate-50 shadow-sm transition">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <Image className="rounded-full object-cover w-10 h-10"
                                        src={item?.image || 'https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000'}
                                        alt={item?.title || 'Guest'}
                                        width={40}
                                        height={40}
                                        title={item?.title || 'Guest'}
                                        priority
                                    />

                                    <div>
                                        <h2 className="font-medium text-slate-800">{item.title}</h2>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">{item?.manufacturer || `N/A`}</td>
                            <td className="px-6 py-4">{item?.price}</td>
                            <td className="px-6 py-4 text-start">
                                <button onClick={() => setIsUpdate(true)} className=" mr-4 p-2 rounded-lg bg-black/20 hover:bg-black/40 transition"><IoChevronUpCircleOutline size={20} /></button>
                                <span>{item?.stock}</span>
                                <ModalComponent
                                    modalTitle="Update Medicine Stock!"
                                    isOpen={isUpdate}
                                    onClose={() => setIsUpdate(false)}
                                    onConfirm={() => handleUpdate(item.id)}
                                />
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button onClick={() => setIsOpen(true)} className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"><MdDeleteForever size={20} /></button>
                                <ModalComponent
                                    modalTitle="Delete Medicine!"
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                    onConfirm={() => handleDelete()}
                                />
                            </td>
                        </tr>)}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MedicineTable;