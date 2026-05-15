import { orderService } from "@/modules/orders/order.service";
import { useQuery } from "@tanstack/react-query";


const useOrdersData = () => {
    const { data } = useQuery({
        queryKey: ['ordersData'],
        queryFn: async () => {
            const data = await orderService.getOrderData();
            return data?.result;
        },
        refetchInterval: 3000,
        staleTime: 2000,
        refetchOnWindowFocus: true,
    });
    return { data };
};

export default useOrdersData;