"use client"

import { useQuery } from "@tanstack/react-query";

const useUserSession = () => {

    const { data: user, isError, isLoading, error } = useQuery({
        queryKey: ['userSession'],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/api/auth/get-session`, { credentials: 'include' });

            if (!res.ok) {
                throw new Error('Failed to fetch userSession');
            }
            const data = await res.json();
            return data?.user ?? null;
        },
        staleTime: 1000 * 60 * 5,
        retry: 1,
        refetchOnWindowFocus: false,
    });

    return { user, isError, isLoading, error };
};

export default useUserSession;