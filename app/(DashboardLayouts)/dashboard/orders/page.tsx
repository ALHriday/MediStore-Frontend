import Orders from "@/lib/components/orders/Orders";
// import { getSession } from "@/lib/getSession";

const page = async () => {
    // const session = await getSession();
    // const user = session?.user;
    return (
        <div>
            <Orders />
        </div>
    );
};

export default page;