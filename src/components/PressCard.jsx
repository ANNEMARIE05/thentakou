import { motion as Motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function PressCard({ article, langue }) {
  // Si c'est un concours avec une image, afficher une carte spéciale
  if (article.isConcours && article.image) {
    return (
      <Motion.div
        className="group rounded-none border-2 border-dusk/10 bg-pureWhite overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-darkYellow hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative w-full min-h-[250px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden">
          <img 
            src={article.image} 
            alt={article.titre[langue]} 
            className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-300" 
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 text-pureWhite">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:gap-2 mb-2 md:mb-3">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-pureWhite/90 font-semibold">
                {article.media}
              </p>
              {article.date && (
                <>
                  <span className="hidden sm:inline text-pureWhite/50">•</span>
                  <p className="text-[10px] md:text-xs text-pureWhite/80 font-medium">
                    {article.date}
                  </p>
                </>
              )}
            </div>
            <p className="font-host font-semibold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-pureWhite mb-2 md:mb-3 leading-tight">
              {article.titre[langue]}
            </p>
            {article.description && (
              <p className="text-xs md:text-sm lg:text-base text-pureWhite/90 leading-relaxed max-w-3xl">
                {article.description[langue]}
              </p>
            )}
          </div>
        </div>
      </Motion.div>
    )
  }

  // Carte standard pour les autres articles
  return (
    <Motion.a
      href={article.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 rounded-none border-2 border-dusk/10 bg-pureWhite p-4 md:p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-darkYellow hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-dusk/5 p-2 md:p-3 rounded-none border border-dusk/10 group-hover:bg-dusk/10 transition-colors">
        <img src={article.logo} alt={article.media} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:gap-2 mb-1 md:mb-2">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-dusk/70 font-semibold">
            {article.media}
          </p>
          {article.date && (
            <>
              <span className="hidden sm:inline text-dusk/30">•</span>
              <p className="text-[10px] md:text-xs text-dusk/60 font-medium">
                {article.date}
              </p>
            </>
          )}
        </div>
        <p className="font-host font-semibold text-base md:text-lg lg:text-xl text-deepBlack mb-1 md:mb-2 leading-tight group-hover:text-darkYellow transition-colors">
          {article.titre[langue]}
        </p>
        {article.description && (
          <p className="text-xs md:text-sm text-dusk/70 leading-relaxed">
            {article.description[langue]}
          </p>
        )}
      </div>
      <div className="flex-shrink-0 self-start md:self-center">
        <FaExternalLinkAlt className="text-darkYellow text-lg md:text-xl lg:text-2xl group-hover:scale-110 group-hover:rotate-[-15deg] transition-transform" />
      </div>
    </Motion.a>
  )
}

