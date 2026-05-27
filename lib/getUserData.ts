import { cookies } from "next/headers";

const url = new URL(process.env.NEXT_PUBLIC_API_URL!).toString();

const getUserData = async () => {
    const cookieStore = await cookies();
    try {
        const res = await fetch(`${url}api/admin/users`, {
            method: "GET",
            headers: { Cookie: cookieStore.toString() },
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Internal Server Error!');
        }
        const result = await res.json();

        return { result: result.data, error: null };
    } catch {
        return { result: null, err: { message: 'something went wrong!' } }
    }
};

export default getUserData;