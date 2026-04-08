import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import type { Translation } from '../content/translations';
import { AnimatePresence, motion } from 'motion/react';

type FullGalleryProps = {
  t: Translation;
};

export const FullGallery = ({ t }: FullGalleryProps) => {
  const [validImages, setValidImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkImages = async () => {
      const urls = [];
      // Generar URLs potenciales, mezclando .webp y .jpeg basados en nombres comunes
      for (let i = 1; i <= 40; i++) {
        urls.push(`/gallery/gallery${i}.webp`);
        urls.push(`/gallery/gallery${i}.jpeg`);
        urls.push(`/gallery/gallery${i}.jpg`);
      }
      
      const validUrls: string[] = [];
      const imagePromises = urls.map((url) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            validUrls.push(url);
            resolve();
          };
          img.onerror = () => resolve();
          img.src = url;
        });
      });

      Promise.all(imagePromises).then(() => {
        setValidImages(validUrls);
      });
    };

    checkImages();
  }, []);

  return (
    <div className="min-h-screen bg-brand-light pt-32 pb-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-brand-dark md:text-6xl">{t.gallery.title}</h1>
            <p className="mt-4 text-lg text-brand-muted">Full Portfolio</p>
          </div>
          <a
            href="#gallery"
            className="flex items-center gap-2 rounded-xl bg-brand-dark px-6 py-3 font-bold text-white transition-all hover:bg-brand-brown"
          >
            <Icon icon="heroicons:arrow-left-20-solid" className="h-5 w-5" />
            Back
          </a>
        </div>

        {validImages.length === 0 ? (
          <div className="flex h-64 items-center justify-center">
            <span className="text-brand-muted">Loading gallery...</span>
          </div>
        ) : (
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
            {validImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/70 shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Gallery project ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute right-6 top-6 text-white hover:text-brand-brown transition-colors">
              <Icon icon="heroicons:x-mark-20-solid" className="h-10 w-10" />
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen view"
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
