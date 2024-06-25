import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { SectionCard } from "./section-card";

interface Props {
  items: {
    image: string;
    title: string;
    description: string;
    price: number;
  }[];
}

export function SectionCarousel({ items }: Props) {
  return (
    // <Carousel
    //   opts={{
    //     align: "start",
    //   }}
    //   className="w-full max-w-sm"
    // >
    //   <CarouselContent>
    //     {Array.from({ length: 5 }).map((_, index) => (
    //       <CarouselItem key={index} className="">
    //         <div className="p-1">
    //           <Card>
    //             <CardContent className="flex aspect-square items-center justify-center p-6">
    //               <span className="text-3xl font-semibold">{index + 1}</span>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
    <Carousel
      opts={{
        align: "start",
      }}
      className='w-full '
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className='basis-auto'>
            <SectionCard {...item} />
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <CarouselPrevious className="md:-left-12 -left-2" />
      <CarouselNext className="md:-right-12 -right-2" />
    </Carousel>
  );
}
