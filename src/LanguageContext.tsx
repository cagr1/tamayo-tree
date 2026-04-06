import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Tree Services in Minneapolis, MN — Available 24/7',
    'hero.subtitle': 'Professional Tree Removal, Trimming & Storm Damage Cleanup. Serving Minneapolis & 50 Miles Around Since 2020. Expert care for your property\'s safety and beauty.',
    'hero.emergency': 'Emergency? Call Now',
    'hero.quote': 'Get a Free Estimate',
    'hero.whatsapp': 'WhatsApp Us',
    'trust.emergency': '24/7 Emergency',
    'trust.estimates': 'Free Estimates',
    'trust.coverage': '50-Mile Coverage',
    'trust.residential': 'Residential & Commercial',
    'trust.since': 'Since 2020',
    'services.title': 'Our Professional Services',
    'services.subtitle': 'Comprehensive tree care and exterior maintenance for the Twin Cities area.',
    'services.removal.title': 'Tree Removal',
    'services.removal.desc': 'Safe and efficient removal of dead, diseased, or hazardous trees.',
    'services.trimming.title': 'Tree Trimming',
    'services.trimming.desc': 'Keep your trees healthy and beautiful. Precise trimming promotes growth.',
    'services.emergency.title': 'Emergency Service',
    'services.emergency.desc': 'Storm damage? Fallen tree? Available 24/7 for immediate response.',
    'services.stump.title': 'Stump Grinding',
    'services.stump.desc': 'Remove unsightly stumps and reclaim your yard space.',
    'services.exterior.title': 'Exterior Services',
    'services.exterior.desc': 'Lawn mowing, gutter cleaning, siding, and roofing.',
    'services.painting.title': 'Interior Painting',
    'services.painting.desc': 'Professional interior painting to refresh your living spaces.',
    'about.title': 'Why Choose Tamayo\'s',
    'about.subtitle': 'We pride ourselves on reliability, safety, and customer satisfaction.',
    'about.speed.title': 'Same-Day Response',
    'about.speed.desc': 'Available 24/7 for urgent situations in Minneapolis and beyond.',
    'about.clean.title': 'Clean, Precise Work',
    'about.clean.desc': 'We leave your yard immaculate, removing all debris.',
    'about.price.title': 'Transparent Pricing',
    'about.price.desc': 'No hidden fees. Free estimates. Cash and Zelle accepted.',
    'contact.title': 'Contact & Location',
    'contact.subtitle': 'Visit us or get in touch for all your tree service needs.',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Your Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.email': 'Email Address',
    'contact.form.service': 'Service Needed',
    'contact.form.message': 'Message / Details',
    'contact.form.submit': 'Request Free Quote',
    'contact.info.title': 'Business Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Hours',
    'contact.directions': 'Get Directions',
    'footer.desc': 'Professional tree care and exterior services in Minneapolis since 2020. Licensed and insured for your peace of mind.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.availability': 'Availability',
    'footer.hours': 'Open 24 Hours / 7 Days a Week',
    'footer.payments': 'Payments: Cash & Zelle',
    'footer.rights': 'All Rights Reserved.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.gallery': 'Galería',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'hero.title': 'Servicios de Árboles en Minneapolis, MN — 24/7',
    'hero.subtitle': 'Remoción profesional de árboles, poda y limpieza de tormentas. Sirviendo a Minneapolis y 50 millas a la redonda desde 2020.',
    'hero.emergency': '¿Emergencia? Llame Ya',
    'hero.quote': 'Obtenga un Presupuesto Gratis',
    'hero.whatsapp': 'Escríbanos por WhatsApp',
    'trust.emergency': 'Emergencias 24/7',
    'trust.estimates': 'Presupuestos Gratis',
    'trust.coverage': 'Cobertura de 50 Millas',
    'trust.residential': 'Residencial y Comercial',
    'trust.since': 'Desde 2020',
    'services.title': 'Nuestros Servicios Profesionales',
    'services.subtitle': 'Cuidado integral de árboles y mantenimiento exterior para el área de Twin Cities.',
    'services.removal.title': 'Remoción de Árboles',
    'services.removal.desc': 'Remoción segura y eficiente de árboles muertos, enfermos o peligrosos.',
    'services.trimming.title': 'Poda de Árboles',
    'services.trimming.desc': 'Mantenga sus árboles sanos y hermosos. La poda precisa promueve el crecimiento.',
    'services.emergency.title': 'Servicio de Emergencia',
    'services.emergency.desc': '¿Daños por tormenta? ¿Árbol caído? Disponibles 24/7 para respuesta inmediata.',
    'services.stump.title': 'Trituración de Tocones',
    'services.stump.desc': 'Elimine tocones antiestéticos y recupere el espacio de su jardín.',
    'services.exterior.title': 'Servicios Exteriores',
    'services.exterior.desc': 'Corte de césped, limpieza de canaletas, revestimiento y techado.',
    'services.painting.title': 'Pintura Interior',
    'services.painting.desc': 'Pintura interior profesional para renovar sus espacios.',
    'about.title': 'Por Qué Elegir a Tamayo\'s',
    'about.subtitle': 'Nos enorgullecemos de la confiabilidad, seguridad y satisfacción del cliente.',
    'about.speed.title': 'Respuesta el Mismo Día',
    'about.speed.desc': 'Disponibles 24/7 para situaciones urgentes en Minneapolis y alrededores.',
    'about.clean.title': 'Trabajo Limpio y Preciso',
    'about.clean.desc': 'Dejamos su jardín inmaculado, eliminando todos los escombros.',
    'about.price.title': 'Precios Transparentes',
    'about.price.desc': 'Sin tarifas ocultas. Presupuestos gratis. Aceptamos Cash y Zelle.',
    'contact.title': 'Contacto y Ubicación',
    'contact.subtitle': 'Visítenos o contáctenos para todas sus necesidades de servicios de árboles.',
    'contact.form.title': 'Envíenos un Mensaje',
    'contact.form.name': 'Su Nombre',
    'contact.form.phone': 'Número de Teléfono',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.service': 'Servicio Necesitado',
    'contact.form.message': 'Mensaje / Detalles',
    'contact.form.submit': 'Solicitar Presupuesto Gratis',
    'contact.info.title': 'Información del Negocio',
    'contact.info.address': 'Dirección',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Correo',
    'contact.info.hours': 'Horario',
    'contact.directions': 'Obtener Direcciones',
    'footer.desc': 'Cuidado profesional de árboles y servicios exteriores en Minneapolis desde 2020. Licenciados y asegurados para su tranquilidad.',
    'footer.links': 'Enlaces Rápidos',
    'footer.contact': 'Información de Contacto',
    'footer.availability': 'Disponibilidad',
    'footer.hours': 'Abierto 24 Horas / 7 Días a la Semana',
    'footer.payments': 'Pagos: Cash y Zelle',
    'footer.rights': 'Todos los derechos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
