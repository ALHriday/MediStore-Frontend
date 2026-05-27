import { GrImage } from "react-icons/gr";

const MedicineDetailsSkeleton = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 w-11/12 mx-auto">
                <div className="w-full md:w-4/10 h-50 relative p-4">
                    <div className="w-36 md:w-52 h-20 md:h-32 rounded-md object-cover bg-slate-300 flex justify-center items-center">
                        < GrImage className="text-2xl text-gray-500"></GrImage>
                    </div>
                </div>
                <div className="w-full md:w-6/10 border-2 p-4 rounded-md">
                    <h2 className="text-sm md:text-xl font-bold mt-2"></h2>
                    <h3 className="text-gray-900 mt-1 text-[12px] md:text-md"></h3>
                    <div className="flex gap-12 mt-2 mb-2">
                        <p className="font-semibold"></p>
                        <p> <span className="font-bold">Q:</span></p>
                    </div>
                    <div>
                        <p className="font-bold">Description: </p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicineDetailsSkeleton;