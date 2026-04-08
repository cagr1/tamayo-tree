import { useState } from 'react';
import { Icon } from '@iconify/react';
import type { Translation } from '../content/translations';

type ContactSectionProps = {
  t: Translation;
};

const ContactForm = ({ t }: { t: Translation }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="rounded-[28px] border border-slate-100 bg-white p-8 shadow-xl">
      <h3 className="mb-6 text-2xl font-bold text-brand-dark">{t.contact.title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">{t.contact.form.name}</label>
            <input
              required
              type="text"
              className="w-full rounded-2xl border border-slate-200 p-3 outline-none transition-all focus:ring-2 focus:ring-brand-dark"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">{t.contact.form.email}</label>
            <input
              required
              type="email"
              className="w-full rounded-2xl border border-slate-200 p-3 outline-none transition-all focus:ring-2 focus:ring-brand-dark"
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">{t.contact.form.phone}</label>
            <input
              required
              type="tel"
              className="w-full rounded-2xl border border-slate-200 p-3 outline-none transition-all focus:ring-2 focus:ring-brand-dark"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">{t.contact.form.service}</label>
            <select className="w-full rounded-2xl border border-slate-200 bg-white p-3 outline-none transition-all focus:ring-2 focus:ring-brand-dark">
              <option>Tree Removal</option>
              <option>Tree Trimming</option>
              <option>Stump Grinding</option>
              <option>Emergency Service</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">{t.contact.form.message}</label>
          <textarea
            required
            rows={4}
            className="w-full rounded-2xl border border-slate-200 p-3 outline-none transition-all focus:ring-2 focus:ring-brand-dark"
          ></textarea>
        </div>
        <button
          disabled={status !== 'idle'}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-dark p-4 font-bold text-white shadow-lg transition-all hover:bg-brand-brown active:translate-y-[1px] disabled:opacity-50"
        >
          {status === 'sending' ? (
            t.contact.form.sending
          ) : status === 'success' ? (
            t.contact.form.success
          ) : (
            <>
              <Icon icon="heroicons:paper-airplane-20-solid" className="h-5 w-5" />
              {t.contact.form.submit}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export const ContactSection = ({ t }: ContactSectionProps) => (
  <section id="contact" className="relative overflow-hidden bg-brand-light py-24">
    <div className="pointer-events-none absolute inset-0 z-0 opacity-15" aria-hidden="true">
      <img src="/images/forest.png" alt="" className="h-full w-full object-cover" />
    </div>
    <div className="relative z-10 mx-auto max-w-[1200px] space-y-10 px-4">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-100 bg-white p-8 shadow-lg">
          <h3 className="mb-8 text-3xl font-bold text-brand-dark">{t.contact.info.title}</h3>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
                <Icon icon="heroicons:map-pin-20-solid" className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-brand-dark">{t.contact.info.address}</div>
                <p className="text-brand-muted">2307 University Ave NE, Minneapolis, MN 55418</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=2307+University+Ave+NE,Minneapolis,MN+55418"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-bold text-brand-brown transition-colors hover:text-brand-dark"
                >
                  {t.contact.info.directions}
                  <Icon icon="heroicons:arrow-up-right-20-solid" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
                <Icon icon="heroicons:phone-20-solid" className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-brand-dark">{t.contact.info.phone}</div>
                <a href="tel:16123829542" className="block text-brand-muted hover:text-brand-brown hover:underline">+1 612-382-9542</a>
                <a href="tel:16123828804" className="block text-brand-muted hover:text-brand-brown hover:underline">+1 612-382-8804</a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
                <Icon icon="heroicons:envelope-20-solid" className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-brand-dark">{t.contact.info.email}</div>
                <a
                  href="mailto:tamayostreeservices@gmail.com"
                  className="font-bold text-brand-brown transition-colors hover:text-brand-dark"
                >
                  tamayostreeservices@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
                <Icon icon="heroicons:clock-20-solid" className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-brand-dark">{t.contact.info.hours}</div>
                <p className="text-brand-muted">7:00 AM – 6:00 PM, Every Day</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm t={t} />
      </div>

      <div className="h-[420px] w-full overflow-hidden rounded-[28px] border-4 border-white shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.762145615744!2d-93.2650892234088!3d45.0135000710698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d9669566956%3A0x61577743541850!2s2307%20University%20Ave%20NE%2C%20Minneapolis%2C%20MN%2055418!5e0!3m2!1sen!2sus!4v1712334777777!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tamayo's Tree Services Location"
        ></iframe>
      </div>
    </div>
  </section>
);
