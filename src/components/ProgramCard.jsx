import { motion as Motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const stylesVariantes = {
  standard: 'from-darkYellow/90 to-clay',
  rouge: 'from-deepMaroon to-clay',
  vert: 'from-forestGreen to-darkYellow',
}

export default function ProgramCard({ programme, langue }) {
  return (
    <Motion.article
      className="rounded-none overflow-hidden border border-dusk/10 bg-pureWhite flex flex-col shadow-[0_18px_40px_rgba(0,0,0,0.09)]"
      initial={{ opacity: 0, translateY: 40 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${programme.image})` }}
      />
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div
          className={`inline-flex text-xs font-bold uppercase tracking-[0.3em] text-pureWhite px-4 py-1 bg-gradient-to-r ${stylesVariantes[programme.variante]}`}
        >
          {programme.variante === 'standard' && (langue === 'fr' ? 'Signature' : 'Signature')}
          {programme.variante === 'rouge' && (langue === 'fr' ? 'Edition Rouge' : 'Red edition')}
          {programme.variante === 'vert' && (langue === 'fr' ? 'Edition Verte' : 'Green edition')}
        </div>
        <h3 className="font-burbank text-3xl text-deepBlack">
          {programme.titre}
        </h3>
        <p className="text-dusk/80 leading-relaxed flex-1">
          {programme.description[langue]}
        </p>
        <button className="group flex items-center gap-2 text-darkYellow font-semibold uppercase tracking-widest hover:text-deepBlack transition-colors">
          <span>{langue === 'fr' ? 'Découvrir' : 'Discover'}</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </Motion.article>
  )
}

