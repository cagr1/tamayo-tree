/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TRANSLATIONS } from './content/translations';
import type { Lang } from './content/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyUs } from './components/WhyUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const t = TRANSLATIONS[lang];

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
