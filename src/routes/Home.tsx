import { BannerCarousel } from "@/components/banner-carousel";
import { Footer } from "@/components/footer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Navbar } from "@/components/navbar";
import { SectionCarousel } from "@/components/section-carousel";
import { getProducts } from "@/services/getProducts";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/slides/1.png",
  },
  {
    image: "/slides/2.png",
  },
  {
    image: "/slides/3.png",
  },
  {
    image: "/slides/4.png",
  },
];

export default function Home() {
  const [blushs, setBlushs] = useState<any[]>([]);
  const [eyebrows, setEyebrows] = useState<any[]>([]);
  const [eyeliners, setEyeliners] = useState<any[]>([]);
  const [eyeshadows, setEyeshadows] = useState<any[]>([]);
  const [lipsticks, setLipsticks] = useState<any[]>([]);
  const [nailPolish, setNailPolish] = useState<any[]>([]);

  useEffect(() => {
    // getting blushs
    getProducts("blush").then((blushs) => {
      setBlushs(blushs.slice(0, 10));
    });

    //eyebrow
    getProducts("eyebrow").then((eyebrows) => {
      setEyebrows(eyebrows.slice(0, 10));
    });

    //eyeliner
    getProducts("eyeliner").then((eyeliners) => {
      setEyeliners(eyeliners.slice(0, 10));
    });

    //eyeshadow
    getProducts("eyeshadow").then((eyeshadows) => {
      setEyeshadows(eyeshadows.slice(0, 10));
    });

    //lipstick
    getProducts("lipstick").then((lipsticks) => {
      setLipsticks(lipsticks.slice(0, 10));
    });

    //nail_polish
    getProducts("nail_polish").then((nailPolish) => {
      setNailPolish(nailPolish.slice(0, 10));
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='mx-auto w-full px-5 mt-10'>
        <BannerCarousel items={slides} />
      </div>

      <MaxWidthWrapper className='my-20'>
        <h2 className='mt-2 font-bold text-3xl text-primary mb-5'>Blush</h2>

        <SectionCarousel items={blushs} />
      </MaxWidthWrapper>

      <MaxWidthWrapper className='my-20'>
        <h2 className='mt-2 font-bold text-3xl text-primary mb-5'>
          Sombrancelha
        </h2>

        <SectionCarousel items={eyebrows} />
      </MaxWidthWrapper>

      <MaxWidthWrapper className='my-20'>
        <h2 className='mt-2 font-bold text-3xl text-primary mb-5'>
          Delineador
        </h2>

        <SectionCarousel items={eyeliners} />
      </MaxWidthWrapper>

      <MaxWidthWrapper className='my-20'>
        <h2 className='mt-2 font-bold text-3xl text-primary mb-5'>Sombra</h2>

        <SectionCarousel items={eyeshadows} />
      </MaxWidthWrapper>

      <MaxWidthWrapper className='my-20'>
        <h2 className='mt-2 font-bold text-3xl text-primary mb-5'>Batom</h2>

        <SectionCarousel items={lipsticks} />
      </MaxWidthWrapper>

      <MaxWidthWrapper className='my-20'>
        <h2 className='mt-2 font-bold text-3xl text-primary mb-5'>Esmalte</h2>

        <SectionCarousel items={nailPolish} />
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
