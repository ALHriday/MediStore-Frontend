import { Role } from "@/lib/types/types";
import Link from "next/link";

const adminRoutelists = [
    {
        title: "🏡 Statistics",
        link: "/dashboard"
    },
    {
        title: "Ⓜ️ Manage users",
        link: "/dashboard/admin/manage-users"
    },

];
const sellerRoutelists = [
    {
        title: "🏡 Statistics",
        link: "/dashboard"
    },
    {
        title: "💊 Medicines",
        link: "/dashboard/seller/seller-medicine"
    },
    {
        title: "➕ Create Medicine",
        link: "/dashboard/seller/create-medicine"
    },
    {
        title: "📤 Update Medicine",
        link: "/dashboard/seller/update-medicine"
    },
    {
        title: "🅾️ Orders",
        link: "/dashboard/seller/orders"
    },

];
const customerRoutelists = [
    {
        title: "🏡 Statistics",
        link: "/dashboard"
    },
];

type LinkInfo = {
    title: string;
    link: string;
}


const RoleAndNavigateList = ({ role }: { role: string }) => {

    let link: LinkInfo[] = [];

    if (role === Role.ADMIN) {
        link = adminRoutelists;
    }
    if (role === Role.SELLER) {
        link = sellerRoutelists;
    }
    if (role === Role.CUSTOMER) {
        link = customerRoutelists;
    }

    return (
        <div className="p-4 flex flex-col gap-1">
            {link.map(item => <div className="rounded-md text-black px-4 py-2 bg-slate-50 shadow-md" key={item.link}>
                <Link className="px-2 py-1" href={item.link}>{item.title}</Link>
            </div>)}
        </div>
    )
};

export default RoleAndNavigateList;