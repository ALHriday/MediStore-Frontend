"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCart from "@/lib/hooks/useCart";
import useCategoryData from "@/lib/hooks/useCategoryData";
import useMedicinesData from "@/lib/hooks/useMedicinesData";
import { Category, Medicine } from "@/lib/types/types";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaSortAmountUp } from "react-icons/fa";
import Carrousel from "../Carrousel";
import Link from "next/link";
import { GrImage } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Pagination from "../pagination/pagination";
import { SearchIcon } from "lucide-react";

const Medicines = () => {
    const [search, setSearch] = useState<string>('');
    const [m, setM] = useState<string>('');
    const [sort, setSort] = useState<"asc" | "desc">('asc');
    const [categoryId, setCategoryId] = useState<string>('');
    const [skip, setSkip] = useState<number>(0);

    const { data, isLoading } = useMedicinesData({ search, m, sort, categoryId, skip });
    const { categories, isLoading: loadingCategory } = useCategoryData();
    const { cartItems, setCartItems } = useCart();
    const currentPath = usePathname();


    const handleAddToCart = (medicine: Medicine) => {
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

    return (

        <div className="px-4">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="w-full mx-auto gap-4 py-4 justify-between items-center relative">
                <div className="grid grid-cols-12 gap-4 overflow-hidden">
                    <div className="col-span-8 md:col-span-9 relative">
                        <SearchIcon className="absolute w-10 h-13 top-0 left-2 p-2 rounded-md font-bold" />
                        <Input
                            className="pl-12 pr-4 py-6 rounded-xl focus-visible:ring-2 outline-0"
                            placeholder="Search your medicines"
                            type="text"
                            name="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2 items-center col-span-4 md:col-span-3">
                        <p className="text-slate-500 font-extrabold"><FaSortAmountUp /></p>
                        <select className="px-1 border-2 rounded-md py-2 bg-slate-50 shadow max-w-20 lg:max-w-40" onChange={(e) => setSort(e.target.value as 'asc' | 'desc')} name="Sort" id="" value={sort}>
                            <option className="rounded-md" value="asc" >Default</option>
                            <option className="rounded-md" value="desc">Price High to Low</option>
                            <option className="rounded-md" value="asc">Price Low to High</option>
                        </select>
                    </div>
                </div>
                {search &&
                    <div className="w-full flex flex-col justify-start items-start flex-wrap gap-4 absolute top-20 right-0 z-30 bg-slate-50 p-2 md:px-4 md:py-6 min-h-screen border rounded-md">
                        {data && data?.map((medicine: Medicine) =>
                            <div key={medicine.id} className="p-2 rounded-md shadow-md flex justify-between gap-2 min-w-75 md:w-100">
                                <Link className="flex gap-4 w-full" href={`/medicines/${medicine?.id}`}>
                                    <div className="relative w-3/12 md:w-4/12">
                                        <Image
                                            className="rounded-md object-cover w-full"
                                            src={medicine?.image}
                                            alt={medicine?.title}
                                            fill
                                            priority
                                            sizes="100vh"
                                        />
                                    </div>
                                    <div className="w-9/12 md:w-8/12">
                                        <h2 className="text-sm md:text-md font-bold">{medicine?.title}</h2>
                                        <h3 className="text-sm text-gray-900">{medicine?.manufacturer}</h3>
                                        <p className="text-sm md:text-md">stock: {medicine.stock}</p>
                                    </div>
                                </Link>

                                <div className="flex flex-col justify-between items-end gap-2">
                                    <p className="font-semibold">${medicine.price}</p>
                                    <Button onClick={() => handleAddToCart(medicine as Medicine)}><FaCartPlus /></Button>
                                </div>
                            </div>
                        )}
                    </div>}
            </div>


            <div className="flex flex-col gap-4 relative">
                <div>
                    {currentPath === '/' && <Carrousel />}
                </div>
                <div>
                    <div className={`bg-slate-50 py-4 sm:col-span-3 flex flex-col gap-2 rounded-md`}>
                        <h1 className="text-2xl md:text-4xl font-bold pl-2">Product Categories</h1>
                        {loadingCategory ? (<div className="flex gap-2 overflow-auto rounded-md shadow-sm p-2 mx-2">
                            {Array.from({ length: 6 }).map((_, i) => <div className="rounded-md p-2 border shadow-sm flex items-center bg-slate-200 w-26 h-10" key={i}>
                                <button className="cursor-pointer text-sm md:text-md font-medium md:font-bold"></button>
                            </div>)}
                        </div>) :
                            (<div className="flex gap-2 overflow-auto snap-mandatory rounded-md shadow-sm p-2 mx-2">
                                <div className="rounded-md p-2 shadow-sm flex items-center bg-[#DCFDDC] border-2 border-slate-400">
                                    <button className="cursor-pointer text-sm md:text-md font-medium md:font-bold px-4 " onClick={() => setCategoryId('')}>All</button>
                                </div>
                                {categories?.map((c: Category) => <div className={`${categoryId === c.id ? "bg-slate-100 border-2 border-slate-400" : ''} rounded-md p-2 border shadow-sm flex items-center`} key={c?.id}>
                                    <button className={`cursor-pointer text-sm md:text-md font-medium md:font-bold`} onClick={() => setCategoryId(c.id)}>{c?.name}</button>
                                </div>)}
                            </div>)
                        }
                    </div>
                    {isLoading &&
                        <div className="flex justify-center items-center md:justify-start flex-wrap gap-4 mb-6">
                            {Array.from({ length: 10 }).map((_, i) =>
                                <div key={i} className="w-44 md:w-56 p-2 rounded-md gap-2 shadow-md flex flex-col justify-between animate-pulse">
                                    <div className="w-36 md:w-52 h-20 md:h-32 rounded-md object-cover bg-slate-300 flex justify-center items-center">
                                        < GrImage className="text-2xl text-gray-500"></GrImage>
                                    </div>

                                    <h2 className="text-sm md:text-md font-bold mt-2 w-full p-2 bg-slate-300 rounded-md"></h2>
                                    <h3 className="text-gray-900 mt-1 text-[12px] md:text-md w-full p-2 bg-slate-300 rounded-md"></h3>
                                    <div className="flex justify-between mt-2 mb-2 w-full p-2">
                                        <p className="font-semibold p-2 bg-slate-300 rounded-md w-10"></p>
                                        <p className="p-2 bg-slate-300 rounded-md w-10"></p>
                                    </div>
                                    <Button className='w-full p-2'></Button>
                                </div>)}
                        </div>}

                    <div className="flex justify-center md:justify-start md:items-center flex-wrap gap-4 mb-6">
                        {data && data?.map((medicine: Medicine) =>
                            <div key={medicine.id} className="w-44 md:w-56 p-2 rounded-md gap-2 shadow-md flex flex-col justify-between">
                                <Link href={`/medicines/${medicine.id}`}>
                                    <Image
                                        className="rounded-md"
                                        src={medicine?.image}
                                        alt={medicine?.title}
                                        width={200}
                                        height={200}
                                    />

                                    <h2 className="text-sm md:text-md font-bold mt-2">{medicine?.title}</h2>
                                    <h3 className="text-gray-900 mt-1 text-[12px] md:text-md">{medicine?.manufacturer}</h3>

                                </Link>
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between">
                                        <p className="font-semibold">${medicine?.price}</p>
                                        <p>{medicine?.stock}</p>
                                    </div>
                                    <Button onClick={() => handleAddToCart(medicine as Medicine)} className='w-full'>Add to cart</Button>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
            {currentPath === '/medicines' && <div>
                <Pagination skip={skip} setSkip={setSkip} />
            </div>}
        </div>
    );
};

export default Medicines;