import { getSession } from "@/lib/getSession";
import { Role } from "@/lib/types/types";
import { redirect } from "next/navigation";


const CustomerLayout = async ({ children }: { children: React.ReactNode }) => {
    const { user } = await getSession();

    if (user.role !== Role.CUSTOMER) {
        redirect('/');
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default CustomerLayout;