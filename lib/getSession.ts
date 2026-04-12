import { cookies } from "next/headers";

export const getSession = async () => {
    const cookieStore = (await cookies()).toString();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/get-session`, { headers: { Cookie: cookieStore }, cache: "no-store" });

    return await res.json() || {};
}