"use client"

import { medicinesService } from "@/modules/medicines/medicines.service";
import { useQuery } from "@tanstack/react-query";

interface Filter {
    search: string;
    m: string;
    sort: 'asc' | 'desc';
    categoryId: string;
}

const useMedicinesData = ({ search, m, sort, categoryId }: Filter) => {

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['medicines', search, m, sort, categoryId],
        queryFn: async () => {
            const data = await medicinesService.getMedicines(search, m, sort, categoryId);
            return data?.data ?? { data: [] };
        },
        staleTime: 3000,
    });
    return { data, refetch, isLoading };
};

export default useMedicinesData;