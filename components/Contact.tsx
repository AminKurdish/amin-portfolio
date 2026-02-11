import React, { useState } from 'react';
import { TranslationContent, Language } from '../types';
import { Mail, MapPin, Phone, Send, User, Check, Loader2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactProps {
  t: TranslationContent;
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ t, lang }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/aaminshaqlawa@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio Contact: ${formData.name}`
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const getButtonContent = () => {
    if (formStatus === 'submitting') {
      return (
        <>
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="text-lg">...</span>
        </>
      );
    }
    if (formStatus === 'success') {
      return (
        <>
          <span className="text-lg">{lang === 'ku' ? 'نێردرا' : lang === 'ar' ? 'تم الإرسال' : 'Sent'}</span>
          <Check className="w-6 h-6" />
        </>
      );
    }
    if (formStatus === 'error') {
       return (
        <>
          <span className="text-lg">{lang === 'ku' ? 'هەڵە ڕوویدا' : lang === 'ar' ? 'خطأ' : 'Error'}</span>
          <XCircle className="w-6 h-6" />
        </>
       );
    }
    return (
      <>
        {t.contact.sendButton}
        <Send className="w-5 h-5 rtl:rotate-180" />
      </>
    );
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors scroll-mt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.contact.title}
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: t.dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4 rtl:ml-0 rtl:mr-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Email</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-400">aaminshaqlawa@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4 rtl:ml-0 rtl:mr-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Phone</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-400" dir="ltr">+964 782 605 2788</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4 rtl:ml-0 rtl:mr-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Location</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-400">Erbil, Iraq</p>
              </div>
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-300 italic">
                "{t.hero.description}"
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: t.dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden honeypot field to prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.nameLabel}
                </label>
                <div className="relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 text-slate-400 pointer-events-none">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className="w-full pl-10 rtl:pl-4 rtl:pr-10 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.emailLabel}
                </label>
                <div className="relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 text-slate-400 pointer-events-none">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className="w-full pl-10 rtl:pl-4 rtl:pr-10 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                  placeholder="..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full py-3 px-6 rounded-lg font-bold shadow-md transition-all transform flex items-center justify-center gap-2 ${
                  formStatus === 'success' 
                    ? 'bg-green-600 text-white cursor-default' 
                    : formStatus === 'error'
                    ? 'bg-red-600 text-white cursor-default'
                    : 'bg-primary-600 hover:bg-primary-700 text-white hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {getButtonContent()}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;