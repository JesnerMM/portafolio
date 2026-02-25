"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiLockClosed,
} from "react-icons/hi";
import Image, { StaticImageData } from "next/image";
import { ImageGroup } from "@/types";

interface GroupCarouselProps {
  images: StaticImageData[];
  groupLabel: string;
}

function GroupCarousel({ images, groupLabel }: GroupCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div>
      {/* Main image */}
      <div className="relative bg-surface-light">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%]">
                <div className="relative h-[420px] w-full">
                  <Image
                    src={img}
                    alt={`${groupLabel} - captura ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2.5 text-text shadow backdrop-blur-sm transition-colors hover:bg-primary hover:text-background"
              aria-label="Anterior"
            >
              <HiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2.5 text-text shadow backdrop-blur-sm transition-colors hover:bg-primary hover:text-background"
              aria-label="Siguiente"
            >
              <HiChevronRight className="text-xl" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 rounded-full bg-background/75 px-3 py-1 text-xs font-medium text-text backdrop-blur-sm">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto bg-surface-light px-3 pb-3 pt-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-all duration-150 ${
                i === current
                  ? "border-primary opacity-100 shadow-[0_0_0_1px_rgba(6,182,212,0.4)]"
                  : "border-transparent opacity-50 hover:opacity-90"
              }`}
              aria-label={`Ir a imagen ${i + 1}`}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface ImageCarouselProps {
  groups: ImageGroup[];
  title: string;
  restricted?: boolean;
}

export default function ImageCarousel({
  groups,
  title,
  restricted,
}: ImageCarouselProps) {
  const [activeGroup, setActiveGroup] = useState(0);

  if (restricted) {
    return (
      <div className="flex h-64 items-center justify-center rounded-t-2xl bg-surface-light">
        <div className="px-6 text-center">
          <HiLockClosed className="mx-auto mb-3 text-5xl text-primary/40" />
          <p className="font-medium text-text">Imagenes no disponibles</p>
          <p className="mt-1 text-sm text-text-secondary">
            La empresa no otorgo permiso para mostrar capturas del sistema.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Group tabs */}
      {groups.length > 1 && (
        <div className="flex gap-1 border-b border-border bg-surface px-4 pt-3">
          {groups.map((g, i) => (
            <button
              key={i}
              onClick={() => setActiveGroup(i)}
              className={`rounded-t-md px-4 py-2 text-sm font-medium transition-colors ${
                i === activeGroup
                  ? "border-b-2 border-primary text-primary"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              {g.label}
              <span className="ml-1.5 rounded-full bg-surface-light px-1.5 py-0.5 text-xs text-text-secondary">
                {g.images.length}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Carousel for active group */}
      <GroupCarousel
        key={activeGroup}
        images={groups[activeGroup].images}
        groupLabel={`${title} — ${groups[activeGroup].label}`}
      />
    </div>
  );
}
