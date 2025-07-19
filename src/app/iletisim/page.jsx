'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const ContactInfo = ({ icon: Icon, title, content, href, color }) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300">
    <div className={`text-2xl ${color}`}><Icon /></div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      {href ? (
        <a href={href} className="text-gray-300 hover:text-[#3B82F6] transition-colors duration-300">{content}</a>
      ) : (
        <span className="text-gray-300">{content}</span>
      )}
    </div>
  </div>
)

export default function Iletisim() {
  const [formData, setFormData] = useState({ email: '', phone: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ email: '', phone: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A1D37] to-[#1a365d]">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/pexels-pixabay-236705.jpg"
            alt="İletişim"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">İletişim</h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-200">
            Sorularınız için bizimle iletişime geçin
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Bize Ulaşın</h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-200 mb-2">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-200 mb-2">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-gray-200 mb-2">Konu</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-200 mb-2">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
                    required
                  ></textarea>
                </div>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-500">
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                  </div>
                )}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-[#3B82F6] text-white py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3B82F6]/90'
                  }`}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <ContactInfo
                  icon={FaMapMarkerAlt}
                  title="Adres"
                  content="Anıtkabir, Tandoğan, 06570 Çankaya/Ankara"
                  href="https://goo.gl/maps/6Qw1Qw1Qw1Qw1Qw1A"
                  color="text-[#3B82F6]"
                />
                <ContactInfo
                  icon={FaPhoneAlt}
                  title="Telefon"
                  content="+90 312 231 19 54"
                  href="tel:+903122311954"
                  color="text-[#3B82F6]"
                />
                <ContactInfo
                  icon={FaEnvelope}
                  title="E-posta"
                  content="info@ornekfirma.com"
                  href="mailto:info@ornekfirma.com"
                  color="text-[#3B82F6]"
                />
                <ContactInfo
                  icon={FaClock}
                  title="Çalışma Saatleri"
                  content="Pazartesi - Cuma: 09:00 - 18:00"
                  color="text-[#3B82F6]"
                />
              </div>
              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Sosyal Medya</h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://www.instagram.com/ornekfirma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#3B82F6] transition-colors transform hover:scale-110"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/ornekfirma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#3B82F6] transition-colors transform hover:scale-110"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@ornekfirma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#3B82F6] transition-colors transform hover:scale-110"
                  >
                    <FaTiktok className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Konum</h2>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.726930934112!2d32.8375202!3d39.9250546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f1e2b1e2b1b%3A0x1e1e1e1e1e1e1e1e!2sAn%C4%B1tkabir!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 