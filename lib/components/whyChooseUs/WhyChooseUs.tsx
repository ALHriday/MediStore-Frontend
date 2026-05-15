import Image from "next/image";

const WhyChooseUs = () => {
    return (
        <div className="mb-8">
            <div>
                <h1 className="text-2xl md:text-4xl font-bold p-4">Why Choose Us</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-8 p-4 min-h-50 text-md md:text-2xl font-bold text-center">

                <div className="flex items-center justify-center p-4 col-span-3 md:col-span-1 bg-purple-200 rounded-md hover:scale-[1.03] transition ease-in shadow-md hover:rotate-2">
                    <div>
                        <Image
                            src={`/icons8-original-96.png`}
                            alt="icon"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <h1>Genuine Medicine</h1>
                </div>
                <div className="flex items-center justify-center p-4 col-span-3 md:col-span-1 bg-orange-200 rounded-md hover:scale-[1.03] transition ease-in shadow-md hover:-rotate-2">
                    <div>
                        <Image
                            src={`/icons8-delivery-truck-100.png`}
                            alt="icon"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <h1>Fast Delivery</h1>
                </div>
                <div className="flex items-center justify-center p-4 col-span-3 md:col-span-1 bg-teal-200 rounded-md hover:scale-[1.03] transition ease-in shadow-md hover:rotate-2">
                    <div>
                        <Image
                            src={`/icons8-pharma-100.png`}
                            alt="icon"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <h1>Verified Pharmacists</h1>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;