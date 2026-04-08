import { Icon } from '@iconify/react';
import type { Translation } from '../content/translations';

type GalleryProps = {
  t: Translation;
};

export const Gallery = ({ t }: GalleryProps) => (
  <section id="gallery" className="bg-brand-light py-24">
    <div className="mx-auto max-w-[1200px] px-4">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-4xl font-bold text-brand-dark md:text-6xl">{t.gallery.title}</h2>
        <p className="mt-4 text-lg text-brand-muted">{t.gallery.subtitle}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[28px] border border-white/70 shadow-xl">
          <img src="/gallery/gallery1.jpeg" alt="Tree trimming work" className="h-full w-full object-cover" />
        </div>
        <div className="grid gap-6">
          <div className="overflow-hidden rounded-[28px] border border-white/70 shadow-xl">
            <img src="/gallery/gallery3.jpeg" alt="Cleaned yard after removal" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[28px] border border-white/70 shadow-xl">
            <img src="/gallery/gallery5.jpeg" alt="Healthy tree canopy" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <a
          href="#full-gallery"
          className="flex items-center gap-3 rounded-2xl bg-brand-brown px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:translate-y-[-2px] hover:shadow-2xl active:translate-y-[1px]"
        >
          View Full Gallery
          <Icon icon="heroicons:arrow-right-20-solid" className="h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
);
