"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCategoryData from "@/lib/hooks/useCategoryData";
import useMedicinesData from "@/lib/hooks/useMedicinesData";
import { Category, Medicine } from "@/lib/types/types";
import Image from "next/image";
import { useState } from "react";

const Medicines = () => {
    const [search, setSearch] = useState<string>('');
    const [m, setM] = useState<string>('');
    const [sort, setSort] = useState<"asc" | "desc">('asc');
    const [categoryId, setCategoryId] = useState<string>('');

    const { data, isLoading } = useMedicinesData({ search, m, sort, categoryId });
    const { categories } = useCategoryData();

    const handleAddToCart = (id: string) => {
        console.log(id);
    }

    if (isLoading) {
        return <div className="text-center py-4">Loading...</div>
    }

    return (

        <div className="grid grid-cols-5 px-4">
            <div className="col-span-1 mt-8 max-w-11/12">
                <h1 className="text-2xl font-bold mb-4 ml-1">All Categories</h1>
                <div className="flex flex-col gap-1 rounded-md shadow-md p-4">
                    {categories?.map((c: Category) => <div className="rounded-md px-2 py-1 border-b-2" key={c.id}>
                        <button className="cursor-pointer" onClick={() => setCategoryId(c.id)}>{c.name}</button>
                    </div>)}
                </div>
            </div>


            <div className="flex flex-col gap-4 p-4 col-span-4">
                <div className="w-full mx-auto grid gap-4 grid-cols-8 py-4 justify-between items-center">
                    <div className="col-span-5">
                        <Input
                            className="px-2 py-6 rounded-xl"
                            placeholder="Search your medicines"
                            type="text"
                            name="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2 flex gap-4">
                        <div className="w-24 flex gap-2 justify-between items-center">
                            <p className="text-slate-500 font-bold">Sort</p>
                            <select className="w-21 px-1 border-2 rounded-md py-2 bg-slate-50 shadow" onChange={(e) => setSort(e.target.value as 'asc' | 'desc')} name="Sort" id="" value={sort}>
                                <option className="rounded-md" value="asc" >Default</option>
                                <option className="rounded-md" value="desc">Price High to Low</option>
                                <option className="rounded-md" value="asc">Price Low to High</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="flex flex-wrap gap-4">

                    {data && data?.map((medicine: Medicine) =>
                        <div key={medicine.id} className="w-56 p-2 rounded-md gap-4 shadow-md">
                            <Image
                                className="rounded-md"
                                src={medicine?.image}
                                alt={medicine?.title}
                                width={200}
                                height={200}
                            />

                            <h2 className="font-bold mt-2">{medicine?.title}</h2>
                            <h3 className="text-gray-900 mt-1">{medicine?.manufacturer}</h3>
                            <div className="flex justify-between mt-2 mb-2">
                                <p className="font-semibold">${medicine.price}</p>
                                <p>{medicine.stock}</p>
                            </div>
                            <Button onClick={() => handleAddToCart(medicine.id)} className='w-full'>Add to cart</Button>
                        </div>
                    )}
                    {/* {!data ? <div>
                        <Image
                            className="rounded-md"
                            src={`/noProduct.webp`}
                            alt={`No Product Available!`}
                            width={200}
                            height={200}
                        />
                    </div> : ''} */}
                </div>
            </div>

        </div>
    );
};

export default Medicines;