import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Props {
  items: {
    image: string;
  }[];
}

export function BannerCarousel({ items }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className='flex flex-col md:flex-row items-center justify-center md:gap-10'>
                <img
                  src={item.image}
                  alt='image person'
                  width={472}
                  height={172}
                  className='rounded w-full h-[172px] md:h-[472px]'
                  loading='lazy'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-4" />
      </Carousel>
    </div>
  );
}
