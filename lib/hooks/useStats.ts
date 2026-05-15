import { medicinesService } from "@/modules/medicines/medicines.service";
import { useQuery } from "@tanstack/react-query";

const useStats = () => {
    const { data: stats, refetch, isLoading } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const data = await medicinesService.getStats();
            return data?.data ?? [];
        },
    });
    return { stats, refetch, isLoading };
};

export default useStats;