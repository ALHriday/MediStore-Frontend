"use client"

import { medicinesService } from "@/modules/medicines/medicines.service";
import { useQuery } from "@tanstack/react-query";
import { Categories } from "../types/types";

const useCategoryData = () => {
    const { data: categories, refetch, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const data = await medicinesService.getAllCategories();
            const categories = data?.data?.map((item: Categories) => item.category);

            return categories ?? { data: [] };
        },
        staleTime: 3000,
    });
    return { categories, refetch, isLoading };
};

export default useCategoryData;