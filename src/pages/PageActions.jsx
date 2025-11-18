import { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'

import { programmes } from '../data/siteContent'

const imagesBibliotheque = [
  '/images/Biblio Baby Lab - Rayon Afrique.jpg',
  '/images/Biblio EPP Hiba Max - Rayons.jpg',
  '/images/Biblio EPP Hiba Max - Rayons jeu de société.jpg',
]

export default function PageActions({ langue, textes }) {
  const [diapoActive, definirDiapoActive] = useState(0)

  useEffect(() => {
    const intervalle = setInterval(() => {
      definirDiapoActive((courante) => (courante + 1) % imagesBibliotheque.length)
    }, 5000)
    return () => clearInterval(intervalle)
  }, [])

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-pureWhite overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/sur le terrain.JPG" 
            alt="Sur le terrain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center space-y-6">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="inline-flex rounded-none border border-pureWhite/30 px-4 py-2 text-sm uppercase tracking-[0.3em]">
              {langue === 'fr' ? 'Sur le terrain' : 'On the ground'}
            </p>
            <h1 className="font-burbank text-3xl md:text-4xl lg:text-6xl leading-tight text-pureWhite">
              {langue === 'fr' ? 'Nos Programmes' : 'Our Programs'}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-pureWhite/90 max-w-2xl mx-auto">
              {textes.introTerrain}
            </p>
          </Motion.div>
        </div>
      </section>

      <div className="space-y-0">
        {programmes.map((programme, index) => (
          <Motion.section
            key={programme.titre}
            className={`py-10 md:py-20 ${index % 2 === 0 ? 'bg-pureWhite' : 'bg-mask-pattern'}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12 lg:gap-16`}>
                {/* Texte à gauche (ou droite selon l'index) */}
                <div className="flex-1 space-y-4 md:space-y-6">
                  <h2 className="font-burbank text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-deepBlack leading-tight">
                    {programme.titre}
                  </h2>
                  <p className="text-sm md:text-lg lg:text-xl text-dusk/90 leading-relaxed">
                    {programme.description[langue]}
                  </p>
                  
                  {/* Bénéfices */}
                  {programme.benefices && programme.benefices[langue] && (
                    <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                      {programme.benefices[langue].map((benefice, idx) => (
                        <div key={idx} className="space-y-1 md:space-y-2">
                          <h3 className="font-semibold text-base md:text-xl text-deepBlack">
                            {benefice.titre}
                          </h3>
                          <p className="text-sm md:text-base text-dusk/80 leading-relaxed">
                            {benefice.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image à droite (ou gauche selon l'index) */}
                <div className="flex-1 w-full">
                  <Motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <img
                      src={programme.image}
                      alt={programme.titre}
                      className="w-full h-auto object-contain rounded-none"
                    />
                  </Motion.div>
                </div>
              </div>
            </div>
          </Motion.section>
        ))}
      </div>

      {/* Section Carousel Bibliotheque */}
      <section className="bg-pureWhite py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-burbank text-2xl md:text-4xl lg:text-5xl text-deepBlack text-center mb-6 md:mb-12">
            {langue === 'fr' ? 'Nos Bibliothèques' : 'Our Libraries'}
          </h2>
          
          {/* Texte explicatif */}
          <div className="w-full mb-6 md:mb-12 space-y-3 md:space-y-6">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-2 md:space-y-4"
            >
              <p className="text-sm md:text-lg lg:text-xl text-dusk/90 leading-relaxed text-left">
                {textes.introBibliotheques}
              </p>
              <p className="text-xs md:text-base lg:text-lg text-dusk/80 leading-relaxed text-left">
                {textes.descriptionBibliotheques}
              </p>
            </Motion.div>
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${diapoActive * 100}%)` }}
            >
              {imagesBibliotheque.map((image, index) => (
                <div key={index} className="min-w-full px-3">
                  <Motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                  >
                    <img
                      src={image}
                      alt={`Bibliothèque ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </Motion.div>
                </div>
              ))}
            </div>
            
            {/* Boutons de navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => definirDiapoActive((prev) => (prev - 1 + imagesBibliotheque.length) % imagesBibliotheque.length)}
                className="p-3 border-2 border-darkYellow bg-pureWhite text-deepBlack hover:bg-darkYellow hover:text-pureWhite transition-all duration-300 shadow-jaune"
                aria-label={langue === 'fr' ? 'Image précédente' : 'Previous image'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots de pagination */}
              <div className="flex gap-2">
                {imagesBibliotheque.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => definirDiapoActive(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === diapoActive
                        ? 'bg-darkYellow w-8'
                        : 'bg-dusk/30 w-3 hover:bg-dusk/50'
                    }`}
                    aria-label={`${langue === 'fr' ? 'Image' : 'Image'} ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => definirDiapoActive((prev) => (prev + 1) % imagesBibliotheque.length)}
                className="p-3 border-2 border-darkYellow bg-pureWhite text-deepBlack hover:bg-darkYellow hover:text-pureWhite transition-all duration-300 shadow-jaune"
                aria-label={langue === 'fr' ? 'Image suivante' : 'Next image'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


