import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'motion/react';
import type { Lang, Translation } from '../content/translations';

type NavbarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
};

export const Navbar = ({ lang, setLang, t }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-light/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <img src="/images/tamayo_logo.png" alt="Tamayo's Logo" className="h-12 w-auto md:h-16" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {['home', 'services', 'gallery', 'about', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium uppercase tracking-wider text-brand-dark transition-colors hover:text-brand-brown"
            >
              {t.nav[item]}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2 rounded-full border border-brand-dark px-3 py-1 text-sm font-bold text-brand-dark transition-all hover:bg-brand-dark hover:text-white"
          >
            <Icon icon="heroicons:globe-alt-20-solid" className="h-4 w-4" />
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <a
            href="tel:16123829542"
            className="rounded-full bg-brand-dark px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-brand-brown active:translate-y-[1px]"
          >
            {t.nav.emergency}
          </a>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="text-sm font-bold text-brand-dark">
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-dark">
            {isMobileMenuOpen ? (
              <Icon icon="heroicons:x-mark-20-solid" className="h-7 w-7" />
            ) : (
              <Icon icon="heroicons:bars-3-20-solid" className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full flex w-full flex-col gap-4 border-t border-slate-100 bg-brand-light p-6 shadow-xl lg:hidden"
          >
            {['home', 'services', 'gallery', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-brand-dark"
              >
                {t.nav[item]}
              </a>
            ))}
            <a href="tel:16123829542" className="rounded-xl bg-brand-dark p-4 text-center font-bold text-white">
              {t.nav.emergency}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
