"use client"

import useStats from "../hooks/useStats";
import { Role } from "../types/types";
import Statistics from "./Statistics";

const StatsCard = ({ userRole }: { userRole: Role }) => {

    const { stats, isLoading } = useStats();
    if (isLoading) {
        return <div className='text-center py-6 animate-pulse'>Loading Stats...</div>
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 p-4">
                <div className="flex md:justify-center items-center text-2xl semibold p-2 bg-slate-100 border-2 border-cyan-500 shadow-md rounded-md">
                    <h1 className="text-4xl border-r-2 p-2">💵</h1>
                    <div className="p-2 flex flex-col gap-1">
                        <h1>Total Revenue</h1>
                        <p>${stats.totalRevenue < 10 ? `0${stats.totalRevenue}` : stats.totalRevenue}</p>
                    </div>
                </div>
                <div className="flex md:justify-center items-center text-2xl semibold p-2 bg-slate-100 border-2 border-cyan-500 shadow-md rounded-md">
                    <h1 className="text-4xl border-r-2 p-2">🛒</h1>
                    <div className="p-2 flex flex-col gap-1">
                        <h1>Orders</h1>
                        <p>{stats.totalOrders < 10 ? `0${stats.totalOrders}` : stats.totalOrders}</p>
                    </div>
                </div>
                {userRole === Role.ADMIN &&
                    <div className="flex md:justify-center items-center text-2xl semibold p-2 bg-slate-100 border-2 border-cyan-500 shadow-md rounded-md">
                        <h1 className="text-4xl border-r-2 p-2">🙍‍♂️</h1>
                        <div className="p-2 flex flex-col gap-1">
                            <h1>Users</h1>
                            <p>{stats.totalUsers < 10 ? `0${stats.totalUsers}` : stats.totalUsers}</p>
                        </div>
                    </div>
                }
                <div className="flex md:justify-center items-center text-2xl semibold p-2 bg-slate-100 border-2 border-cyan-500 shadow-md rounded-md">
                    <h1 className="text-4xl border-r-2 p-2">💊</h1>
                    <div className="p-2 flex flex-col gap-1">
                        <h1>Products</h1>
                        <p>{stats.totalMedicines < 10 ? `0${stats.totalMedicines}` : stats.totalMedicines}</p>
                    </div>
                </div>
            </div>
            <div>
                <Statistics stats={stats} />
            </div>
        </div>
    );
};

export default StatsCard;