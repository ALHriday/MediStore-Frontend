import { getSession } from "@/lib/getSession";
import { Role } from "@/lib/types/types";
import { redirect } from "next/navigation";


const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
    const { user } = await getSession();

    if (user.role !== Role.ADMIN) {
        redirect('/');
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default AdminLayout;