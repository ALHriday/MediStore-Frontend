import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const CardSkeleton = () => {
    return (
        <div className="flex justify-start items-center flex-wrap gap-4 mb-6">
            <Skeleton className='w-40 md:w-56 h-50' />
            <div>
                <Skeleton />
                <Skeleton />
            </div>
            <Skeleton count={3} />
        </div>
    );
};

export default CardSkeleton;