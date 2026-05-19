import StatsCard from "@/lib/components/StatsCard";
import { getSession } from "@/lib/getSession";

const page = async () => {
    const session = await getSession();
    const user = session?.user;
    return (
        <div>
            <StatsCard userRole={user.role} />
        </div>
    );
};

export default page;