import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Carrosel = () => {
    return (
        <div className="w-full overflow-hidden">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="w-full h-[400px] object-cover">
                        <Image className="object-fill"
                            src={`https://images.pexels.com/photos/7526074/pexels-photo-7526074.jpeg`}
                            alt='banner'
                            width={1520}
                            height={400}
                        />

                    </CarouselItem>
                    <CarouselItem className="w-full h-[400px] object-cover">
                        <Image className="object-fill"
                            src={`https://images.pexels.com/photos/7615562/pexels-photo-7615562.jpeg`}
                            alt='banner'
                            width={1520}
                            height={400}
                        />
                    </CarouselItem>
                    <CarouselItem className="w-full h-[400px] object-cover">
                        <Image className="object-fill"
                            src={`https://images.pexels.com/photos/7034131/pexels-photo-7034131.jpeg`}
                            alt='banner'
                            width={1520}
                            height={400}
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Carrosel;