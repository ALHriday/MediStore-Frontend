import { cookies } from "next/headers";
import { authClient } from "./auth-client";
import { redirect } from "next/navigation";

export const getSession = async () => {
    const cookieStore = cookies();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/get-session`, { headers: { Cookie: (await cookieStore).toString() }, cache: "no-store" });

    if (!res.ok) {
        await authClient.signOut();
        redirect('/login');
    }
    return await res.json();
}
