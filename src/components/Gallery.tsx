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
    </div>
  </section>
);
