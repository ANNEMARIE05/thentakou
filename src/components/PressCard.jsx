import { motion as Motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function PressCard({ article, langue }) {
  return (
    <Motion.a
      href={article.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col md:flex-row items-start md:items-center gap-6 rounded-none border-2 border-dusk/10 bg-pureWhite p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-darkYellow hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-dusk/5 p-3 rounded-none border border-dusk/10 group-hover:bg-dusk/10 transition-colors">
        <img src={article.logo} alt={article.media} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
          <p className="text-xs uppercase tracking-[0.2em] text-dusk/70 font-semibold">
            {article.media}
          </p>
          {article.date && (
            <>
              <span className="hidden sm:inline text-dusk/30">•</span>
              <p className="text-xs text-dusk/60 font-medium">
                {article.date}
              </p>
            </>
          )}
        </div>
        <p className="font-host font-semibold text-lg md:text-xl text-deepBlack mb-2 leading-tight group-hover:text-darkYellow transition-colors">
          {article.titre[langue]}
        </p>
        {article.description && (
          <p className="text-sm text-dusk/70 leading-relaxed">
            {article.description[langue]}
          </p>
        )}
      </div>
      <div className="flex-shrink-0 self-start md:self-center">
        <FaExternalLinkAlt className="text-darkYellow text-xl md:text-2xl group-hover:scale-110 group-hover:rotate-[-15deg] transition-transform" />
      </div>
    </Motion.a>
  )
}

