import { medicinesService } from "@/modules/medicines/medicines.service";
import { useQuery } from "@tanstack/react-query";

const useMedicineLen = () => {
    const { data: totalMedicinesCount, isLoading } = useQuery({
        queryKey: ['totalMedicinesCount'],
        queryFn: async () => {
            const data = await medicinesService.getMedicinesCount();
            const totalMedicinesCount = data?.data;

            return totalMedicinesCount || [];
        },
    });
    return { totalMedicinesCount, isLoading };
};

export default useMedicineLen;