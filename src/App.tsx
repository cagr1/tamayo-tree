/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { TRANSLATIONS } from './content/translations';
import type { Lang } from './content/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { FullGallery } from './components/FullGallery';
import { WhyUs } from './components/WhyUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const t = TRANSLATIONS[lang];

  if (route === '#full-gallery') {
    return (
      <div className="min-h-screen font-sans bg-brand-light">
        <FullGallery t={t} />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <TrustBar t={t} />
      <Services t={t} />
      <Gallery t={t} />
      <WhyUs t={t} />
      <ContactSection t={t} />
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
    </div>
  );
}
