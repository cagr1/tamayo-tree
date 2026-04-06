import { Icon } from '@iconify/react';
import type { Translation } from '../content/translations';

type TrustBarProps = {
  t: Translation;
};

export const TrustBar = ({ t }: TrustBarProps) => (
  <div className="border-y border-white/10 bg-brand-dark py-6 text-white">
    <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-8 px-4 md:gap-16">
      {t.trust.map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
          <Icon icon="heroicons:check-circle-20-solid" className="h-[18px] w-[18px] text-white" />
          {item}
        </div>
      ))}
    </div>
  </div>
);
