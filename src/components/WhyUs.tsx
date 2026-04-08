import { Icon } from '@iconify/react';
import type { Translation } from '../content/translations';

type WhyUsProps = {
  t: Translation;
};

export const WhyUs = ({ t }: WhyUsProps) => (
  <section id="about" className="bg-brand-dark py-24 text-white">
    <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-4 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <h2 className="text-4xl font-bold md:text-6xl">{t.whyUs.title}</h2>
        <p className="mb-12 mt-6 text-xl leading-relaxed text-brand-light/80">{t.whyUs.subtitle}</p>
        <div className="space-y-8">
          {t.whyUs.items.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-brown/20 text-white">
                <Icon icon="heroicons:check-circle-20-solid" className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                <p className="text-brand-light/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="relative overflow-hidden rounded-[32px] shadow-2xl aspect-video w-full transition-transform hover:scale-[1.02] duration-500">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1119581199?h=17610179a7"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="hidden rounded-[28px] bg-brand-brown p-6 shadow-xl md:block transition-transform hover:-translate-y-1 duration-300">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">{t.whyUs.card.label}</div>
          <div className="mt-3 text-2xl font-bold text-white">{t.whyUs.card.title}</div>
          <div className="mt-2 text-sm text-white/80">{t.whyUs.card.subtitle}</div>
        </div>
      </div>
    </div>
  </section>
);
