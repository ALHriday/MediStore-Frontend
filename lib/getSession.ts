import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authClient } from "./auth-client";

export const getSession = async () => {
    const cookieStore = await cookies();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/api/auth/get-session`, { headers: { Cookie: cookieStore.toString() }, cache: "no-store", credentials: 'include' });

    if (!res.ok) {
        await authClient.signOut();
        redirect('/login');
    }
    return await res.json();
}
