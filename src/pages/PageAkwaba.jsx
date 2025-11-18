import { useEffect, useState, useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaBookOpen,
  FaGlobeAfrica,
  FaHandsHelping,
  FaUsers,
} from 'react-icons/fa'

import SectionTitle from '../components/SectionTitle'
import heroLogo from '../assets/logo-placeholder.svg'
import {
  imagesCarrouselHero,
  statistiquesImpact,
  temoignages,
  logosPartenaires,
  livres,
} from '../data/siteContent'

const iconesStatistiques = {
  FaGlobeAfrica,
  FaUsers,
  FaBookOpen,
  FaHandsHelping,
}

// Composant pour animer le comptage des chiffres
function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    // Extraire le nombre et le préfixe (ex: '+3500' -> prefix: '+', num: 3500)
    const match = value.match(/^([+\-]?)(\d+)$/)
    if (!match) {
      setCount(value)
      return
    }

    const [, prefix = '', numStr] = match
    const targetNum = parseInt(numStr, 10)
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      
      // Easing function pour un effet plus naturel
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * targetNum)
      
      setCount(prefix + currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(prefix + targetNum)
      }
    }

    animate()
  }, [isInView, value, duration])

  return <span ref={ref}>{count || 0}</span>
}

export default function PageAkwaba({ langue, textes }) {
  const [diapoActive, definirDiapoActive] = useState(0)
  const [temoignageActive, definirTemoignageActive] = useState(0)
  const [positionPartenaires, definirPositionPartenaires] = useState(0)
  const [livreActive, definirLivreActive] = useState(0)

  useEffect(() => {
    const intervalle = setInterval(() => {
      definirDiapoActive((courante) => (courante + 1) % imagesCarrouselHero.length)
    }, 5000)
    return () => clearInterval(intervalle)
  }, [])

  // Automatisation du slide des témoignages
  useEffect(() => {
    const intervalleTemoignages = setInterval(() => {
      definirTemoignageActive((courante) => (courante + 1) % temoignages.length)
    }, 5000)
    return () => clearInterval(intervalleTemoignages)
  }, [])

  // Automatisation du slide des partenaires - défilement continu
  useEffect(() => {
    const intervallePartenaires = setInterval(() => {
      definirPositionPartenaires((prev) => {
        // Défilement continu de 1px toutes les 16ms pour un effet fluide (environ 60px par seconde)
        // On réinitialise quand on atteint la largeur d'une série complète de logos
        // Estimation: 13 logos * (224px + 32px) = 3328px pour lg, 13 * (192px + 32px) = 2912px pour md, etc.
        const largeurEstimee = window.innerWidth >= 1024 
          ? 3328 
          : window.innerWidth >= 768 
          ? 2912 
          : 2392
        
        // Réinitialiser à 0 quand on atteint la fin de la première série pour un effet infini
        if (prev >= largeurEstimee) {
          return 0
        }
        return prev + 2 // Déplacement de 2px à chaque intervalle pour un défilement fluide
      })
    }, 16) // ~60fps pour un défilement fluide
    return () => clearInterval(intervallePartenaires)
  }, [])

  // Automatisation du slide des livres
  useEffect(() => {
    const intervalleLivres = setInterval(() => {
      definirLivreActive((courante) => {
        // Calculer le nombre maximum de slides possibles (4 livres - 3 visibles = 2 slides possibles)
        const maxSlides = Math.max(0, livres.length - 3)
        return courante >= maxSlides ? 0 : courante + 1
      })
    }, 5000)
    return () => clearInterval(intervalleLivres)
  }, [])

  const temoignagePrecedent = () => {
    definirTemoignageActive((prev) => (prev - 1 + temoignages.length) % temoignages.length)
  }

  const temoignageSuivant = () => {
    definirTemoignageActive((prev) => (prev + 1) % temoignages.length)
  }

  const livrePrecedent = () => {
    definirLivreActive((prev) => {
      // Sur mobile: une carte à la fois (0 à length-1)
      // Sur desktop: 3 cartes visibles (0 à length-3)
      const isMobile = window.innerWidth < 768
      const maxSlides = isMobile ? livres.length - 1 : Math.max(0, livres.length - 3)
      return prev === 0 ? maxSlides : prev - 1
    })
  }

  const livreSuivant = () => {
    definirLivreActive((prev) => {
      // Sur mobile: une carte à la fois (0 à length-1)
      // Sur desktop: 3 cartes visibles (0 à length-3)
      const isMobile = window.innerWidth < 768
      const maxSlides = isMobile ? livres.length - 1 : Math.max(0, livres.length - 3)
      return prev >= maxSlides ? 0 : prev + 1
    })
  }


  const diapoCourante = imagesCarrouselHero[diapoActive]

  return (
    <div className="space-y-0">
      {/* Hero Section avec overlay sombre et texte centré */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-pureWhite overflow-hidden">
        <div className="absolute inset-0">
          <Motion.img 
            key={diapoCourante.url}
            src={diapoCourante.url} 
            alt={diapoCourante.legende[langue]}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center space-y-8">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="font-burbank text-4xl md:text-5xl lg:text-7xl leading-tight text-pureWhite">
              {langue === 'fr' 
                ? 'AKWABA' 
                : 'AKWABA'}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link
                  to="/etre"
                  className="inline-block px-8 py-4 border-2 border-darkYellow bg-deepBlack text-pureWhite font-bebas text-lg uppercase tracking-wide hover:bg-darkYellow hover:text-deepBlack transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                >
                  {langue === 'fr' ? 'Devenir Bénévole' : 'Become a Volunteer'}
                </Link>
              </Motion.div>
              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <a
                  href="https://www.helloasso.com/associations/the-n-takou"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-8 py-4 border-2 border-deepBlack bg-pureWhite text-deepBlack font-bebas text-lg uppercase tracking-wide hover:bg-deepBlack hover:text-pureWhite transition-all duration-300"
                >
                  {langue === 'fr' ? 'Faire un Don' : 'Donate Now'}
                </a>
              </Motion.div>
            </div>
          </Motion.div>
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 pt-8">
            {imagesCarrouselHero.map((image, index) => (
              <button
                key={image.url}
                onClick={() => definirDiapoActive(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === diapoActive ? 'bg-darkYellow w-8' : 'bg-pureWhite/50'
                }`}
                aria-label={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section avec fond jaune et trois cartes */}
      <section className="bg-darkYellow py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-burbank text-deepBlack mb-6 md:mb-12">
            {langue === 'fr' 
              ? 'Nous sommes une organisation caritative et ONG à but non lucratif'
              : 'We are non-profit Charity & NGO Organization'}
          </h2>
          <div className="grid gap-4 md:gap-8 md:grid-cols-3">
            {/* Carte Donation */}
            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-pureWhite p-4 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.15)] space-y-2 md:space-y-4"
            >
              <div className="text-4xl md:text-5xl text-darkYellow mb-2 md:mb-4">💰</div>
              <h3 className="font-burbank text-xl md:text-2xl text-deepBlack">
                {langue === 'fr' ? 'Donation' : 'Donation'}
              </h3>
              <p className="text-xs md:text-sm font-semibold text-dusk/70 uppercase tracking-wide">
                {langue === 'fr' ? 'Collecter des fonds dans le monde entier' : 'Collect fund over the world'}
              </p>
              <p className="text-xs md:text-sm text-dusk/80 leading-relaxed">
                {langue === 'fr'
                  ? 'Chaque contribution se transforme en livres, bourses et ateliers pour les enfants. Votre générosité fait la différence.'
                  : 'Every contribution becomes books, scholarships and workshops for children. Your generosity makes a difference.'}
              </p>
            </Motion.div>

            {/* Carte Fundraising */}
            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-pureWhite p-4 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.15)] space-y-2 md:space-y-4"
            >
              <div className="text-4xl md:text-5xl text-darkYellow mb-2 md:mb-4">💵</div>
              <h3 className="font-burbank text-xl md:text-2xl text-deepBlack">
                {langue === 'fr' ? 'Collecte de fonds' : 'Fundraising'}
              </h3>
              <p className="text-xs md:text-sm font-semibold text-dusk/70 uppercase tracking-wide">
                {langue === 'fr' ? 'Collecter des fonds dans le monde entier' : 'Collect fund over the world'}
              </p>
              <p className="text-xs md:text-sm text-dusk/80 leading-relaxed">
                {langue === 'fr'
                  ? 'Nous organisons des événements et des campagnes pour mobiliser des ressources et créer un impact durable dans les communautés.'
                  : 'We organize events and campaigns to mobilize resources and create lasting impact in communities.'}
              </p>
            </Motion.div>

            {/* Carte Volunteer */}
            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-pureWhite p-4 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.15)] space-y-2 md:space-y-4"
            >
              <div className="text-4xl md:text-5xl text-darkYellow mb-2 md:mb-4">🤝</div>
              <h3 className="font-burbank text-xl md:text-2xl text-deepBlack">
                {langue === 'fr' ? 'Bénévole' : 'Volunteer'}
              </h3>
              <p className="text-xs md:text-sm font-semibold text-dusk/70 uppercase tracking-wide">
                {langue === 'fr' ? 'Collecter des fonds dans le monde entier' : 'Collect fund over the world'}
              </p>
              <p className="text-xs md:text-sm text-dusk/80 leading-relaxed">
                {langue === 'fr'
                  ? 'Rejoignez notre équipe de bénévoles passionnés et contribuez à transformer des vies grâce à l\'éducation et à la lecture.'
                  : 'Join our team of passionate volunteers and help transform lives through education and reading.'}
              </p>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Section About Us avec image et texte */}
      <section className="bg-pureWhite py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:gap-12 md:grid-cols-2 items-center">
            <Motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/bienvenue.jpg"
                alt={langue === 'fr' ? 'Bienvenue à The N\'Takou' : 'Welcome to The N\'Takou'}
                className="w-full h-auto object-cover shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="font-burbank text-2xl md:text-4xl lg:text-5xl text-deepBlack">
                {langue === 'fr' ? (
                  <>
                    Bienvenue à <span className="text-darkYellow">The N'Takou</span>
                  </>
                ) : (
                  <>
                    Welcome to <span className="text-darkYellow">The N'Takou</span> Charity
                  </>
                )}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-dusk/80 leading-relaxed">
                {textes.histoire}
              </p>
              <Link
                to="/apropos"
                className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-darkYellow text-deepBlack font-bebas text-lg uppercase tracking-wide hover:bg-brightYellow transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
              >
                {langue === 'fr' ? 'En savoir plus sur nous' : 'More About Us'}
                <span>→</span>
              </Link>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-20 section-wave">
        <SectionTitle
          eyebrow="Impact"
          title={langue === 'fr' ? 'Tellement de choses en 10 ans…' : 'So much in 10 years…'}
          subtitle={textes.introTerrain}
        />
        <div className="mt-6 md:mt-12 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statistiquesImpact.map((stat) => {
            const Icone = iconesStatistiques[stat.icone]
            return (
              <Motion.div
                key={stat.etiquette.fr}
                className="group rounded-none border-2 border-darkYellow bg-deepBlack text-pureWhite p-4 md:p-6 text-center space-y-2 md:space-y-3 shadow-jaune hover:shadow-jauneFort transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Icone className="mx-auto text-3xl md:text-4xl text-darkYellow group-hover:scale-110 transition-transform" />
                <p className="font-burbank text-3xl md:text-4xl text-darkYellow">
                  <AnimatedCounter value={stat.valeur} duration={2} />
                </p>
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] text-pureWhite/80">
                  {stat.etiquette[langue]}
                </p>
              </Motion.div>
            )
          })}
        </div>
      </section>

      {/* Section Livres avec Slider */}
      <section className="bg-pureWhite py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Inspiration / Inspiration"
            title={langue === 'fr' ? 'Paroles d\'inspiration' : 'Words of Inspiration'}
            subtitle={
              langue === 'fr'
                ? 'Des citations qui nous guident et nous inspirent dans notre mission éducative.'
                : 'Quotes that guide and inspire us in our educational mission.'
            }
          />
          <div className="mt-6 md:mt-12 relative">
            {/* Conteneur du slider */}
            <div className="relative overflow-hidden">
              {/* Version mobile : une carte à la fois */}
              <div className="md:hidden overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${livreActive * 100}%)` 
                  }}
                >
                  {livres.map((livre, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <Motion.div
                        className="group flex flex-col rounded-none border-2 border-dusk/10 bg-pureWhite shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-darkYellow transition-all duration-300 overflow-hidden h-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="w-full h-64 overflow-hidden bg-dusk/5 flex items-center justify-center">
                          <img
                            src={livre.image}
                            alt={livre.titre[langue]}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="font-burbank text-base text-deepBlack mb-2 group-hover:text-darkYellow transition-colors">
                            {livre.auteur[langue]}
                          </h3>
                          <p className="text-sm text-dusk/80 leading-relaxed flex-1 italic">
                            "{livre.citation[langue]}"
                          </p>
                        </div>
                      </Motion.div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Version desktop : slider horizontal */}
              <div 
                className="hidden md:flex gap-4 lg:gap-8 transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${livreActive * 33.333}%)` 
                }}
              >
                {livres.map((livre, index) => (
                  <div key={index} className="w-[calc(33.333%-1.07rem)] flex-shrink-0">
                    <Motion.div
                      className="group flex flex-col rounded-none border-2 border-dusk/10 bg-pureWhite shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-darkYellow transition-all duration-300 overflow-hidden h-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-full h-48 md:h-64 overflow-hidden bg-dusk/5">
                        <img
                          src={livre.image}
                          alt={livre.titre[langue]}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 md:p-6 flex flex-col flex-1">
                        <h3 className="font-burbank text-lg md:text-xl text-deepBlack mb-2 md:mb-3 group-hover:text-darkYellow transition-colors">
                          {livre.auteur[langue]}
                        </h3>
                        <p className="text-xs md:text-sm text-dusk/80 leading-relaxed flex-1 italic">
                          "{livre.citation[langue]}"
                        </p>
                      </div>
                    </Motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons de navigation - mobile et desktop */}
            <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
              <button
                onClick={livrePrecedent}
                className="p-2 md:p-3 border-2 border-darkYellow bg-pureWhite text-deepBlack hover:bg-darkYellow hover:text-pureWhite transition-all duration-300 shadow-jaune"
                aria-label={langue === 'fr' ? 'Livre précédent' : 'Previous book'}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots de pagination */}
              <div className="flex gap-2">
                {livres.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => definirLivreActive(index)}
                    className={`h-2 md:h-3 rounded-full transition-all ${
                      index === livreActive
                        ? 'bg-darkYellow w-6 md:w-8'
                        : 'bg-dusk/30 w-2 md:w-3 hover:bg-dusk/50'
                    }`}
                    aria-label={`${langue === 'fr' ? 'Livre' : 'Book'} ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={livreSuivant}
                className="p-2 md:p-3 border-2 border-darkYellow bg-pureWhite text-deepBlack hover:bg-darkYellow hover:text-pureWhite transition-all duration-300 shadow-jaune"
                aria-label={langue === 'fr' ? 'Livre suivant' : 'Next book'}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages avec Slider */}
      <section className="bg-mask-pattern py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Voix / Voices"
            title={langue === 'fr' ? 'Témoignages' : 'Testimonials'}
            subtitle={textes.introTemoignages}
          />
          <div className="mt-6 md:mt-12 relative">
            {/* Conteneur du slider */}
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${temoignageActive * 100}%)` }}>
                {temoignages.map((personne, index) => (
                  <div key={personne.nom} className="min-w-full px-2 md:px-3">
                    <Motion.figure
                      className="group flex flex-col rounded-none border-2 border-dusk/10 bg-pureWhite shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-darkYellow transition-all duration-300 overflow-hidden max-w-2xl mx-auto"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-full h-48 md:h-64 overflow-hidden bg-dusk/5 flex items-center justify-center">
                        <img
                          src={personne.portrait}
                          alt={personne.nom}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 md:p-6 flex flex-col flex-1">
                        <p className="font-semibold text-base md:text-lg text-deepBlack mb-1 group-hover:text-darkYellow transition-colors">
                          {personne.nom}
                        </p>
                        <p className="text-xs md:text-sm text-dusk/70 mb-2 md:mb-4">{personne.role}</p>
                        <p className="text-sm md:text-base leading-relaxed text-dusk/80 flex-1">
                          {personne.citation[langue]}
                        </p>
                      </div>
                    </Motion.figure>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons de navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={temoignagePrecedent}
                className="p-3 border-2 border-darkYellow bg-pureWhite text-deepBlack hover:bg-darkYellow hover:text-pureWhite transition-all duration-300 shadow-jaune"
                aria-label={langue === 'fr' ? 'Témoignage précédent' : 'Previous testimonial'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots de pagination */}
              <div className="flex gap-2">
                {temoignages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => definirTemoignageActive(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === temoignageActive
                        ? 'bg-darkYellow w-8'
                        : 'bg-dusk/30 w-3 hover:bg-dusk/50'
                    }`}
                    aria-label={`${langue === 'fr' ? 'Témoignage' : 'Testimonial'} ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={temoignageSuivant}
                className="p-3 border-2 border-darkYellow bg-pureWhite text-deepBlack hover:bg-darkYellow hover:text-pureWhite transition-all duration-300 shadow-jaune"
                aria-label={langue === 'fr' ? 'Témoignage suivant' : 'Next testimonial'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Partenaires avec slider */}
      <section className="bg-pureWhite py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Partners / Partenaires"
            title={langue === 'fr' ? 'Nos Partenaires' : 'Our Partners'}
            subtitle={
              langue === 'fr'
                ? 'Des organisations qui nous accompagnent dans notre mission éducative.'
                : 'Organizations supporting our educational mission.'
            }
          />
          <div className="mt-6 md:mt-12 overflow-hidden relative">
            <div 
              className="flex gap-4 md:gap-6 lg:gap-8"
              style={{ 
                transform: `translateX(-${positionPartenaires}px)`,
                willChange: 'transform'
              }}
            >
              {/* Dupliquer les logos pour un effet infini */}
              {[...logosPartenaires, ...logosPartenaires, ...logosPartenaires].map((logo, index) => (
                <div
                  key={`partner-${index}`}
                  className="flex-shrink-0 w-32 md:w-40 lg:w-48 xl:w-56"
                >
                  <div className="h-24 md:h-32 flex items-center justify-center bg-pureWhite border-2 border-dusk/10 p-3 md:p-4 lg:p-6 hover:border-darkYellow transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(212,175,55,0.3)] group">
                    <img
                      src={logo}
                      alt={`Partner ${index % logosPartenaires.length + 1}`}
                      className="max-h-12 md:max-h-16 lg:max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


