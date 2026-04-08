import { Icon } from '@iconify/react';
import type { Translation } from '../content/translations';

type FooterProps = {
  t: Translation;
};

export const Footer = ({ t }: FooterProps) => (
  <footer className="bg-brand-dark pb-10 pt-20 text-white">
    <div className="mx-auto max-w-[1200px] px-4">
      <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-6">
          <img src="/images/tamayo_logo_footer.png" alt="Tamayo's Footer Logo" className="h-20 w-auto" />
          <p className="leading-relaxed text-brand-light/70">{t.footer.desc}</p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61577743541850"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all hover:bg-brand-brown"
            >
              <Icon icon="bi:facebook" className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-xl font-bold">{t.footer.links}</h4>
          <ul className="space-y-4 text-brand-light/70">
            {['home', 'services', 'gallery', 'about', 'contact'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="transition-colors hover:text-brand-brown">
                  {t.nav[item]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xl font-bold">{t.footer.availability}</h4>
          <ul className="space-y-4 text-brand-light/70">
            <li>9:00 AM – 5:00 PM</li>
            <li>{t.nav.emergency}</li>
            <li className="pt-4 font-bold text-white">{t.footer.payments}</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xl font-bold">{t.contact.info.phone}</h4>
          <div className="space-y-4">
            <a href="tel:16123829542" className="block text-2xl font-bold transition-colors hover:text-brand-brown">
              +1 612-382-9542
            </a>
            <a href="tel:16123828804" className="block text-2xl font-bold transition-colors hover:text-brand-brown">
              +1 612-382-8804
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=16123829542"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition-all hover:bg-emerald-500"
            >
              <Icon icon="ic:baseline-whatsapp" className="h-6 w-6" />
              {t.hero.whatsapp}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-10 text-center text-sm text-brand-light/50">
        <p>
          &copy; {new Date().getFullYear()} Tamayo's Tree Services. {t.footer.rights}
        </p>
      </div>
    </div>
  </footer>
);
