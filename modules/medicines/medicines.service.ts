const url = new URL(process.env.NEXT_PUBLIC_API_URL!).toString();

export const medicinesService = {
    getMedicines: async (search: string, m: string, sort: string, categoryId: string) => {
        const params = new URLSearchParams();

        if (search) params.append("search", search);
        if (m) params.append("m", m);
        if (sort) params.append("sort", sort);
        if (categoryId) params.append("categoryId", categoryId);

        const query = params.toString();

        try {
            const res = await fetch(`${url}api/medicines?${query}`) || {};
            const data = await res.json();

            return { data: data?.data, error: null };
        } catch {
            return { result: null, err: { message: 'something went wrong!' } }
        }
    },
    getAllCategories: async () => {
        try {
            const res = await fetch(`${url}api/categories`) || {};
            const data = await res.json();

            return { data: data?.data, error: null };
        } catch {
            return { result: null, err: { message: 'something went wrong!' } }
        }
    },
}