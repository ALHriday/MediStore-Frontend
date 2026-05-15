"use client"

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Title
);

type Stats = {
    totalRevenue: number;
    totalOrders: number;
    totalUsers: number;
    totalMedicines: number;
}


const Statistics = ({ stats }: { stats: Stats }) => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Revenue',
                data: [stats.totalRevenue, , stats.totalRevenue / 2, stats.totalRevenue / 3, stats.totalRevenue / 4, stats.totalRevenue / 5, stats.totalRevenue / 6, stats.totalRevenue, stats.totalRevenue / 7, stats.totalRevenue / 8, stats.totalRevenue / 9, stats.totalRevenue / 10, stats.totalRevenue / 11, stats.totalRevenue / 12],
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.4,
                fill: false,
            },
        ],
    };


    return (
        <div>
            <div className='overflow-hidden p-12'>
                <Line data={data} />
            </div>
        </div>
    );
};

export default Statistics;