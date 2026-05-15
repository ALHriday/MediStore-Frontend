import { cookies } from "next/headers";

export const getSession = async () => {
    const cookieStore = cookies();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/get-session`, { headers: { Cookie: (await cookieStore).toString() }, cache: "no-store" });
    return await res.json();
}
