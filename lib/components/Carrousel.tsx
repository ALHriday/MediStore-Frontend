import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Carrousel = () => {
    return (
        <div>
            <div className="w-full overflow-hidden rounded-md">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="h-75 relative">
                            <Image className="object-cover"
                                src={`/banner2.webp`}
                                alt='banner'
                                fill
                                sizes="100vw"
                                priority
                            />
                        </CarouselItem>
                        <CarouselItem className="h-75 relative">
                            <Image className="object-cover"
                                src={`/banner1.webp`}
                                alt='banner'
                                fill
                                sizes="100vw"
                                priority
                            />

                        </CarouselItem>
                        <CarouselItem className="h-75 relative">
                            <Image className="object-cover"
                                src={`/banner3.webp`}
                                alt='banner'
                                fill
                                sizes="100vw"
                                priority
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="my-6 px-4 py-8 flex flex-col gap-2 md:gap-4 justify-center items-center bg-[rgba(135,248,135,0.29)] rounded-md text-center">
                <h1 className="text-3xl md:text-4xl font-bold">Your Trusted Online Pharmacy</h1>
                <h2 className="text-md md:text-xl bg-[rgba(255,255,255,0.49)] py-1 px-2 rounded-md "><span>🚚</span> Fast Delivery, <span>🤝</span> Genuine Medicine <span>💊</span></h2>
            </div>
        </div>
    );
};

export default Carrousel;