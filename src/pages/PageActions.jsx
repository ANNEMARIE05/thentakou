import { motion as Motion } from 'framer-motion'

import { programmes } from '../data/siteContent'

export default function PageActions({ langue, textes }) {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-pureWhite">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/5905443/pexels-photo-5905443.jpeg?auto=compress&cs=tinysrgb&w=1600)`
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
              {langue === 'fr' ? 'Sur le terrain' : 'On the ground'}
            </p>
            <h1 className="font-burbank text-4xl md:text-6xl leading-tight text-pureWhite">
              {langue === 'fr' ? 'Nos Programmes' : 'Our Programs'}
            </h1>
            <p className="text-lg md:text-xl text-pureWhite/90 max-w-2xl mx-auto">
              {textes.introTerrain}
            </p>
          </Motion.div>
        </div>
      </section>

      <div className="space-y-0">
        {programmes.map((programme, index) => (
          <Motion.section
            key={programme.titre}
            className={`py-20 ${index % 2 === 0 ? 'bg-pureWhite' : 'bg-mask-pattern'}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
                {/* Texte à gauche (ou droite selon l'index) */}
                <div className="flex-1 space-y-6">
                  <h2 className="font-burbank text-4xl md:text-5xl lg:text-6xl text-deepBlack leading-tight">
                    {programme.titre}
                  </h2>
                  <p className="text-lg md:text-xl text-dusk/90 leading-relaxed">
                    {programme.description[langue]}
                  </p>
                  
                  {/* Bénéfices */}
                  {programme.benefices && programme.benefices[langue] && (
                    <div className="space-y-4 pt-4">
                      {programme.benefices[langue].map((benefice, idx) => (
                        <div key={idx} className="space-y-2">
                          <h3 className="font-semibold text-xl text-deepBlack">
                            {benefice.titre}
                          </h3>
                          <p className="text-dusk/80 leading-relaxed">
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
    </div>
  )
}


