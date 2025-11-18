import { motion as Motion } from 'framer-motion'

import PressCard from '../components/PressCard'
import { articlesPresse } from '../data/siteContent'

export default function PagePresse({ langue, textes }) {
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
              {langue === 'fr' ? 'Salle de presse' : 'Press room'}
            </p>
            <h1 className="font-burbank text-4xl md:text-6xl leading-tight text-pureWhite">
              {langue === 'fr' ? 'Ils parlent de nous' : 'They talk about us'}
            </h1>
            <p className="text-lg md:text-xl text-pureWhite/90 max-w-2xl mx-auto">
              {textes.introPresse}
            </p>
          </Motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="space-y-6">
        {articlesPresse.map((article, index) => (
          <PressCard key={`${article.media}-${index}`} article={article} langue={langue} />
        ))}
      </div>
      </section>
    </div>
  )
}


