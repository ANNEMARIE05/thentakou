import { motion as Motion } from 'framer-motion'
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { useEffect } from 'react'

import { liensSociaux } from '../data/siteContent'

const iconesSociaux = {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
}

export default function PageContact({
  langue,
  textes,
  donneesFormulaire,
  definirDonneesFormulaire,
  envoyerFormulaire,
  envoiEnCours,
  messageRetour,
}) {
  // Scroll to form if there's a hash in URL (for redirects from être ntakou page)
  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#contact-form') {
      setTimeout(() => {
        const element = document.getElementById('contact-form')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-pureWhite">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1600)`
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center space-y-6">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="inline-flex rounded-none border border-pureWhite/30 px-4 py-2 text-sm uppercase tracking-[0.3em]">
              {langue === 'fr' ? 'Contact' : 'Contact'}
            </p>
            <h1 className="font-burbank text-4xl md:text-6xl leading-tight text-pureWhite">
              {langue === 'fr' ? 'Contactez-nous' : 'Contact Us'}
            </h1>
          </Motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 space-y-16">
        {/* Introduction Text Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl text-deepBlack leading-relaxed">
            {langue === 'fr' 
              ? '💛 Vous êtes un coeur humanitaire ? Venez comme vous êtes à The N\'Takou en France, en Corée du Sud, au Cameroun, en Côte d\'Ivoire et en République Démocratique du Congo.'
              : '💛 Do you have a humanitarian heart? Come as you are to The N\'Takou in France, South Korea, Cameroon, Côte d\'Ivoire and the Democratic Republic of Congo.'}
          </p>
          <p className="text-lg md:text-xl text-dusk/80 leading-relaxed">
            {langue === 'fr'
              ? 'Vous souhaitez en savoir plus sur nos actions, proposer votre aide ou tout simplement échanger avec nous ? Chaque message compte, tout comme chaque geste. N\'hésitez pas à nous écrire, nous serons ravis de vous répondre et d\'avancer ensemble vers un monde plus juste.'
              : 'Would you like to learn more about our actions, offer your help or simply exchange with us? Every message counts, just like every gesture. Don\'t hesitate to write to us, we will be happy to answer you and move forward together towards a fairer world.'}
          </p>
        </Motion.div>

        {/* Contact Information and Form Grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information Card */}
          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-none border-2 border-darkYellow bg-deepBlack p-8 shadow-jaune space-y-8 text-pureWhite"
          >
            <div>
              <h2 className="font-burbank text-3xl md:text-4xl text-darkYellow mb-6">
                {langue === 'fr' ? 'Prendre contact' : 'Get in touch'}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-darkYellow flex items-center justify-center text-deepBlack flex-shrink-0">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">
                    {langue === 'fr' ? 'Téléphone' : 'Phone'}
                  </p>
                  <a 
                    href="tel:+2250596898848"
                    className="text-pureWhite/90 hover:text-darkYellow transition-colors"
                  >
                    (+225) 05 96 89 88 48
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-darkYellow flex items-center justify-center text-deepBlack flex-shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">
                    {langue === 'fr' ? 'Email' : 'Email'}
                  </p>
                  <a
                    href="mailto:thentakou@gmail.com"
                    className="text-pureWhite/90 hover:text-darkYellow transition-colors break-all"
                  >
                    thentakou@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-darkYellow flex items-center justify-center text-deepBlack flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">
                    {langue === 'fr' ? 'Localisation' : 'Location'}
                  </p>
                  <p className="text-pureWhite/90">
                    {langue === 'fr'
                      ? 'France, Corée du Sud, Cameroun, Côte d\'Ivoire, RDC'
                      : 'France, South Korea, Cameroon, Côte d\'Ivoire, DRC'}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-pureWhite/20">
              <p className="font-semibold text-lg mb-4">
                {langue === 'fr' ? 'Suivez-nous' : 'Follow us'}
              </p>
              <div className="flex gap-4 flex-wrap">
                {liensSociaux.map((social) => {
                  const Icone = iconesSociaux[social.icone]
                  if (!Icone) return null
                  return (
                    <a
                      key={social.nom}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="h-12 w-12 bg-darkYellow text-deepBlack flex items-center justify-center hover:bg-pureWhite hover:scale-110 transition-all duration-300 shadow-jaune"
                      aria-label={social.nom}
                    >
                      <Icone />
                    </a>
                  )
                })}
              </div>
            </div>
          </Motion.div>

          {/* Contact Form */}
          <Motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-none border-2 border-dusk/10 bg-pureWhite p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          >
            <h2 className="font-burbank text-3xl md:text-4xl text-deepBlack mb-6">
              {langue === 'fr' ? 'Contactez-nous' : 'Contact Us'}
            </h2>
            <form onSubmit={envoyerFormulaire} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-deepBlack mb-2">
                  {langue === 'fr' ? 'Nom' : 'Last Name'} *
                </label>
                <input
                  type="text"
                  required
                  value={donneesFormulaire.nom}
                  placeholder={langue === 'fr' ? 'The N\'takou' : 'The N\'takou'}
                  onChange={(e) => definirDonneesFormulaire((prev) => ({ ...prev, nom: e.target.value }))}
                  className="w-full rounded-none border-2 border-dusk/10 px-4 py-3 focus:border-darkYellow focus:outline-none focus:ring-2 focus:ring-darkYellow/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deepBlack mb-2">
                  {langue === 'fr' ? 'Prénom' : 'First Name'}
                </label>
                <input
                  type="text"
                  value={donneesFormulaire.prenom}
                  placeholder={langue === 'fr' ? 'Prénom' : 'First Name'}
                  onChange={(e) => definirDonneesFormulaire((prev) => ({ ...prev, prenom: e.target.value }))}
                  className="w-full rounded-none border-2 border-dusk/10 px-4 py-3 focus:border-darkYellow focus:outline-none focus:ring-2 focus:ring-darkYellow/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deepBlack mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={donneesFormulaire.email}
                  placeholder="thentakou@gmail.com"
                  onChange={(e) => definirDonneesFormulaire((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full rounded-none border-2 border-dusk/10 px-4 py-3 focus:border-darkYellow focus:outline-none focus:ring-2 focus:ring-darkYellow/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deepBlack mb-2">
                  {langue === 'fr' ? 'Téléphone' : 'Phone'} *
                </label>
                <input
                  type="tel"
                  required
                  value={donneesFormulaire.telephone}
                  placeholder="(+225) 05 96 89 88 48"
                  onChange={(e) => definirDonneesFormulaire((prev) => ({ ...prev, telephone: e.target.value }))}
                  className="w-full rounded-none border-2 border-dusk/10 px-4 py-3 focus:border-darkYellow focus:outline-none focus:ring-2 focus:ring-darkYellow/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deepBlack mb-2">
                  {langue === 'fr' ? 'Objet' : 'Subject'} *
                </label>
                <input
                  type="text"
                  required
                  value={donneesFormulaire.object}
                  placeholder={langue === 'fr' ? 'Objet de votre message' : 'Subject of your message'}
                  onChange={(e) => definirDonneesFormulaire((prev) => ({ ...prev, object: e.target.value }))}
                  className="w-full rounded-none border-2 border-dusk/10 px-4 py-3 focus:border-darkYellow focus:outline-none focus:ring-2 focus:ring-darkYellow/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deepBlack mb-2">
                  {langue === 'fr' ? 'Message' : 'Message'} *
                </label>
                <textarea
                  required
                  rows="6"
                  value={donneesFormulaire.message}
                  placeholder={langue === 'fr' ? 'Votre message' : 'Your message'}
                  onChange={(e) => definirDonneesFormulaire((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full rounded-none border-2 border-dusk/10 px-4 py-3 focus:border-darkYellow focus:outline-none focus:ring-2 focus:ring-darkYellow/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={envoiEnCours}
                className="w-full rounded-none border-2 border-darkYellow bg-darkYellow py-4 font-semibold uppercase tracking-widest text-deepBlack disabled:opacity-60 hover:bg-deepBlack hover:text-darkYellow transition-all duration-300 shadow-jaune hover:shadow-jauneFort"
              >
                {envoiEnCours ? '...' : (langue === 'fr' ? 'Envoyer' : 'Send')}
              </button>
              {messageRetour && (
                <p className="text-darkYellow font-semibold text-center">{messageRetour}</p>
              )}
            </form>
          </Motion.div>
        </div>

        {/* Map Section */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="font-burbank text-3xl md:text-4xl text-deepBlack text-center">
            {langue === 'fr' ? 'Où nous trouver' : 'Find us'}
          </h2>
          <div className="rounded-none border-2 border-dusk/10 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937596!2d2.292292615674117!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={langue === 'fr' ? 'Carte The N\'Takou' : 'The N\'Takou Map'}
            />
          </div>
          <p className="text-center text-dusk/70 text-sm">
            {langue === 'fr'
              ? 'The N\'Takou est présent en France, en Corée du Sud, au Cameroun, en Côte d\'Ivoire et en République Démocratique du Congo.'
              : 'The N\'Takou is present in France, South Korea, Cameroon, Côte d\'Ivoire and the Democratic Republic of Congo.'}
          </p>
        </Motion.div>
      </section>
    </div>
  )
}
