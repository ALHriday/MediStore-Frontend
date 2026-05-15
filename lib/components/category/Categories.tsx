"use client"

import useCategoryData from "@/lib/hooks/useCategoryData";
import { Category } from "@/lib/types/types";
import Link from "next/link";


const Categories = () => {
    const { categories } = useCategoryData();
    return (
        <div>
            <div className="p-4 my-8">
                <h1 className="text-2xl font-bold mb-4 ml-1">All Categories</h1>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 rounded-md shadow-md p-4">
                    {categories?.map((c: Category) => <div className="rounded-md px-4 border-b-2 font-bold py-8 bg-teal-100" key={c.id}>
                        <Link href='/medicines'>
                            <button className="cursor-pointer">{c.name}</button>
                        </Link>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Categories;