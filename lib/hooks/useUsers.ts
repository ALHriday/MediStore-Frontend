"use client"

import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
const url = new URL(process.env.NEXT_PUBLIC_API_URL!).toString();

const useUsers = () => {
    const pathName = usePathname();
    const { data: users, refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`${url}api/admin/users`, { credentials: "include", cache: "no-store" });
            const data = await res.json();
            return data?.data;
        },
        enabled: pathName.startsWith('/dashboard'),
    });
    return { users, refetch, isLoading };
};

export default useUsers;