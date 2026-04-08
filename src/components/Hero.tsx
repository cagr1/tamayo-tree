import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'motion/react';
import type { Translation } from '../content/translations';

type HeroProps = {
  t: Translation; // Keeping prop type to avoid breaking App.tsx, though we hardcode copy as requested
};

const HERO_IMAGES = [
  '/gallery/gallery2.jpeg',
  '/gallery/gallery4.webp',
  '/gallery/gallery6.webp'
];

export const Hero = ({ t }: HeroProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Preload next image to entirely prevent flickering/green background
    const preloadImg = new Image();
    preloadImg.src = HERO_IMAGES[(activeIndex + 1) % HERO_IMAGES.length];

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000); // 8 seconds per slide for slow feel

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden bg-brand-dark pt-20">
      {/* Background Images with Ken Burns effect */}
      <div className="absolute inset-0 z-0 bg-[#111]">
        <AnimatePresence mode="sync">
          <motion.img
            key={HERO_IMAGES[activeIndex]}
            src={HERO_IMAGES[activeIndex]}
            alt="Tree service work"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: 10, ease: 'linear' } }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent/30" />
        <div className="absolute inset-0 bg-black/20 md:hidden" /> {/* Extra darkening for mobile readability */}
      </div>

      {/* Core Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 py-20 pb-16">
        <div className="max-w-2xl space-y-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
            <span>{t.hero.badge}</span>
          </div>

          {/* Headline & Subheadline */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="text-lg leading-relaxed text-white/90 md:text-xl max-w-[50ch]">
              {t.hero.subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:16123829542"
              className="flex items-center justify-center gap-3 rounded-xl bg-brand-brown px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-brown/90 hover:scale-[1.02] active:scale-95"
            >
              <Icon icon="heroicons:phone-20-solid" className="h-6 w-6 animate-pulse" />
              {t.hero.emergency}
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 rounded-xl border-2 border-white/90 bg-black/20 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-white"
            >
              {t.hero.estimate}
            </a>
          </div>

          {/* Photo Quote Mechanism */}
          <div className="mt-4 flex items-center gap-4 rounded-xl border border-white/15 bg-black/40 p-4 backdrop-blur-md">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
              <Icon icon="heroicons:camera-20-solid" className="h-6 w-6" />
            </div>
            <p className="text-sm font-medium leading-snug text-white sm:text-base">
              <span className="font-bold text-white">{t.hero.fastQuote}</span> {t.hero.fastQuoteDesc}{' '}
              <a href="sms:6123829542" className="font-bold text-brand-brown hover:underline">
                (612) 382-9542
              </a>
              .
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-sm font-bold text-white/90">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon key={i} icon="heroicons:star-20-solid" className="h-5 w-5 text-yellow-400" />
              ))}
              <span className="ml-1 text-white">{t.hero.trustRating}</span>
            </div>
            <span className="hidden text-white/40 sm:inline">•</span>
            <span>{t.hero.trustExp}</span>
            <span className="hidden text-white/40 sm:inline">•</span>
            <span>{t.hero.trustInsured}</span>
          </div>

        </div>
      </div>
    </section>
  );
};
