import Orders from "@/lib/components/orders/Orders";
// import { getSession } from "@/lib/getSession";

const page = async () => {
    // const { user } = await getSession();
    return (
        <div>
            <Orders />
        </div>
    );
};

export default page;