import React from 'react';
import HeroImageConst from '../../../constants/HeroImage';
import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel';
import Image from '../../ui/image';
import Autoplay from 'embla-carousel-autoplay';

export default function HomeHero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="flex flex-col gap-4">
      {/* Hero Section */}
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full gap-4"
      >
        <CarouselContent>
          {HeroImageConst.map((heroImage, index) => (
            <CarouselItem key={index}>
              {Array.from({ length: 1 }).map((_, index1) => (
                <div key={index1}>
                  <Image
                    src={heroImage.src}
                    alt="Hero Image"
                    className="w-full h-auto rounded-3xl object-cover"
                  />
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex gap-1.5 mt-5 justify-center">
          <div className="w-2.5 h-2.5 border-0 bg-primary-100c rounded-full" />
          <div className="w-2.5 h-2.5 border-0 bg-neutral-300 rounded-full" />
          <div className="w-2.5 h-2.5 border-0 bg-neutral-300 rounded-full" />
        </div>
      </Carousel>
    </section>
  );
}
