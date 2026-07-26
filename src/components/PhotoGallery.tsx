"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  width?: number;
  height?: number;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  categories?: string[];
  showFilter?: boolean;
  columns?: 2 | 3 | 4;
  initialLimit?: number;
}

export default function PhotoGallery({
  images,
  categories,
  showFilter = true,
  columns = 3,
  initialLimit = 12,
}: PhotoGalleryProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(initialLimit);

  const allCategories = categories || [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const displayedImages = filteredImages.slice(0, visibleCount);

  const openLightbox = useCallback((idx: number) => {
    setLightboxIdx(idx);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIdx(null);
    document.body.style.overflow = "";
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) =>
        prev !== null ? (prev + 1) % filteredImages.length : 0
      );
    }
  }, [lightboxIdx, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) =>
        prev !== null
          ? (prev - 1 + filteredImages.length) % filteredImages.length
          : 0
      );
    }
  }, [lightboxIdx, filteredImages.length]);

  const colClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <>
      {/* Filter Bar */}
      {showFilter && allCategories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-brand-primary text-white shadow-[0_0_20px_rgba(182,51,46,0.5)] scale-105"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid — Pure Clean React Rendering for 100% Reliability */}
      <div className={`grid ${colClasses[columns]} gap-6 min-h-[400px]`}>
        {displayedImages.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            className="group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800/80 shadow-md hover:border-brand-primary/50 transition-all duration-300 w-full"
            style={{ aspectRatio: "3 / 4", minHeight: "360px" }}
            onClick={() => openLightbox(idx)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <p className="text-sm text-white font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {img.alt}
              </p>
              <p className="text-xs text-brand-primary font-mono uppercase tracking-wider mt-1">
                {img.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {filteredImages.length > visibleCount && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-brand-primary px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(182,51,46,0.3)] inline-flex items-center gap-3"
          >
            <span>Show More Photos</span>
            <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2.5 py-0.5 rounded-full border border-zinc-700">
              +{filteredImages.length - visibleCount}
            </span>
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIdx !== null && filteredImages[lightboxIdx] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-zinc-900/90 border border-zinc-700 flex items-center justify-center text-white hover:bg-brand-primary transition-colors shadow-lg"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 z-[110] w-12 h-12 rounded-full bg-zinc-900/90 border border-zinc-700 flex items-center justify-center text-white hover:bg-brand-primary transition-colors shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIdx].src}
              alt={filteredImages[lightboxIdx].alt}
              width={filteredImages[lightboxIdx].width || 1200}
              height={filteredImages[lightboxIdx].height || 800}
              className="object-contain max-h-[80vh] w-auto rounded-xl border border-zinc-800 shadow-2xl"
              quality={92}
              priority
            />
            <div className="mt-4 text-center">
              <p className="text-white font-medium text-base">
                {filteredImages[lightboxIdx].alt}
              </p>
              <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mt-1">
                {filteredImages[lightboxIdx].category} &bull; {lightboxIdx + 1}{" "}
                of {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 z-[110] w-12 h-12 rounded-full bg-zinc-900/90 border border-zinc-700 flex items-center justify-center text-white hover:bg-brand-primary transition-colors shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
