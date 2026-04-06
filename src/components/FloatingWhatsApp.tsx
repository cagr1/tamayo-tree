import { Icon } from '@iconify/react';
import type { Translation } from '../content/translations';

type FloatingWhatsAppProps = {
  t: Translation;
};

export const FloatingWhatsApp = ({ t }: FloatingWhatsAppProps) => (
  <a
    href="https://api.whatsapp.com/send/?phone=16123829542"
    className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl transition-all hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon icon="ic:baseline-whatsapp" className="h-7 w-7" />
    <span className="sr-only">{t.hero.whatsapp}</span>
  </a>
);
