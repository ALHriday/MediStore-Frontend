"use client"

import { useQuery } from "@tanstack/react-query";
import { Category } from "../types/types";
const url = new URL(process.env.NEXT_PUBLIC_API_URL!).toString();

const useAllCategories = () => {
    const { data: allCategory, refetch, isLoading } = useQuery({
        queryKey: ['allCategory'],
        queryFn: async () => {
            const res = await fetch(`${url}api/getAllCategory`);
            const data = await res.json();

            const categories = data?.data?.map((item: Category) => item);
            return categories ?? { data: [] };
        },
    });
    return { allCategory, refetch, isLoading };
};

export default useAllCategories;
