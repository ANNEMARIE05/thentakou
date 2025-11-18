import { motion as Motion } from 'framer-motion'

import PressCard from '../components/PressCard'
import { articlesPresse } from '../data/siteContent'

export default function PagePresse({ langue, textes }) {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-pureWhite overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/accueil principal 2.jpg" 
            alt="Salle de presse"
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
              {langue === 'fr' ? 'Salle de presse' : 'Press room'}
            </p>
            <h1 className="font-burbank text-3xl md:text-4xl lg:text-6xl leading-tight text-pureWhite">
              {langue === 'fr' ? 'Ils parlent de nous' : 'They talk about us'}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-pureWhite/90 max-w-2xl mx-auto">
              {textes.introPresse}
            </p>
          </Motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-20">
      <div className="space-y-3 md:space-y-6">
        {articlesPresse.map((article, index) => (
          <PressCard key={`${article.media}-${index}`} article={article} langue={langue} />
        ))}
      </div>
      </section>
    </div>
  )
}


