"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiChevronLeft, HiChevronRight, HiPhotograph } from "react-icons/hi";

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((_, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%]">
              <div className="flex aspect-video items-center justify-center bg-surface-light">
                <div className="text-center text-text-secondary">
                  <HiPhotograph className="mx-auto mb-2 text-4xl text-primary/40" />
                  <p className="text-sm">
                    {title} - Imagen {index + 1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-text backdrop-blur-sm transition-colors hover:bg-primary hover:text-background"
            aria-label="Anterior"
          >
            <HiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-text backdrop-blur-sm transition-colors hover:bg-primary hover:text-background"
            aria-label="Siguiente"
          >
            <HiChevronRight className="text-xl" />
          </button>
        </>
      )}
    </div>
  );
}
