import StatsCard from "@/lib/components/StatsCard";
import { getSession } from "@/lib/getSession";

const page = async () => {
    const { user } = await getSession();
    return (
        <div>
            <StatsCard userRole={user.role} />
        </div>
    );
};

export default page;