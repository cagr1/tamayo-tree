import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'motion/react';
import type { Translation } from '../content/translations';

type HeroProps = {
  t: Translation;
};

const HERO_IMAGES = [
  '/gallery/gallery2.jpeg',
  '/gallery/gallery4.webp',
  '/gallery/gallery6.webp',
  '/gallery/gallery9.webp',
  '/gallery/gallery12.webp',
];

export const Hero = ({ t }: HeroProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-brand-light pt-28">
      <div className="pointer-events-none absolute inset-0 z-0 bg-hero-wash" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-[-120px] z-0 h-[420px] w-[420px] rounded-full bg-brand-brown/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[1200px] items-center gap-12 px-4 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-dark/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-dark shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-brown" />
            {t.hero.badge}
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-none tracking-tighter text-brand-dark md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="max-w-[60ch] text-base leading-relaxed text-brand-muted md:text-lg">{t.hero.subtitle}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:16123829542"
              className="flex items-center justify-center gap-3 rounded-2xl bg-brand-brown px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:translate-y-[-2px] active:translate-y-[1px]"
            >
              <Icon icon="heroicons:exclamation-triangle-20-solid" className="h-5 w-5" />
              {t.hero.emergency}
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 rounded-2xl border border-brand-dark/15 bg-white px-8 py-4 text-lg font-bold text-brand-dark transition-all hover:border-brand-dark/40"
            >
              {t.hero.estimate}
              <Icon icon="heroicons:arrow-up-right-20-solid" className="h-5 w-5" />
            </a>
          </div>
          <div className="grid gap-4 rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-lg sm:grid-cols-2">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">{t.hero.coverage}</div>
              <div className="text-lg font-bold text-brand-dark">{t.hero.coverageDetail}</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">{t.hero.response}</div>
              <div className="text-lg font-bold text-brand-dark">{t.hero.responseDetail}</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 hidden h-24 w-24 rounded-3xl border border-white/70 bg-white/80 shadow-lg lg:block" />
          <div className="relative overflow-hidden rounded-[36px] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={HERO_IMAGES[activeIndex]}
                src={HERO_IMAGES[activeIndex]}
                alt="Tree service crew at work"
                className="block h-[620px] w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-lg">
            <Icon icon="heroicons:phone-20-solid" className="h-5 w-5 text-brand-dark" />
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">Direct Line</div>
              <div className="text-lg font-bold text-brand-dark">+1 612-382-9542</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
