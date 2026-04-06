import { Icon } from '@iconify/react';
import { motion } from 'motion/react';
import type { Translation } from '../content/translations';

type ServicesProps = {
  t: Translation;
};

const SERVICE_ICONS = [
  'heroicons:shield-exclamation-20-solid',
  'heroicons:scissors-20-solid',
  'heroicons:bolt-20-solid',
  'heroicons:cog-6-tooth-20-solid',
  'heroicons:home-modern-20-solid',
  'heroicons:paint-brush-20-solid',
];

export const Services = ({ t }: ServicesProps) => (
  <section id="services" className="bg-brand-light py-24">
    <div className="mx-auto max-w-[1200px] px-4">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-4xl font-bold text-brand-dark md:text-6xl">{t.services.title}</h2>
        <p className="mt-4 text-lg text-brand-muted">{t.services.subtitle}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {t.services.items.map((service, i) => {
          const iconName = SERVICE_ICONS[i];
          return (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="group rounded-[28px] border border-white/70 bg-white p-10 shadow-lg"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-dark transition-all duration-500 group-hover:bg-brand-dark group-hover:text-white">
                  <Icon icon={iconName} className="h-7 w-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted">{t.services.label}</div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-brand-dark">{service.title}</h3>
              <p className="mb-8 leading-relaxed text-brand-muted">{service.desc}</p>
              <a href="#contact" className="flex items-center gap-2 font-bold text-brand-brown transition-all hover:gap-4">
                {t.hero.estimate}
                <Icon icon="heroicons:chevron-right-20-solid" className="h-4 w-4" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
