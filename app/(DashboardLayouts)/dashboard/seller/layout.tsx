import { getSession } from "@/lib/getSession";
import { Role } from "@/lib/types/types";
import { redirect } from "next/navigation";


const SellerLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getSession();
    const user = session?.user;

    if (user?.role !== Role.SELLER) {
        redirect('/');
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default SellerLayout;