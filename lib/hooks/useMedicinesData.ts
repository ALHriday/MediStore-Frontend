import { medicinesService } from "@/modules/medicines/medicines.service";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "./useDebounce";

interface Filter {
    search: string;
    m: string;
    sort: 'asc' | 'desc';
    categoryId: string;
    skip: number;
}

const useMedicinesData = ({ search, m, sort, categoryId, skip }: Filter) => {
    const searchValue = useDebounce(search, 500);

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['medicines', searchValue, m, sort, categoryId, skip],
        queryFn: async () => {
            const data = await medicinesService.getMedicines(searchValue, m, sort, categoryId, skip);
            return data?.data ?? [];
        },
        staleTime: 3000,
    });
    return { data, refetch, isLoading };
};

export default useMedicinesData;