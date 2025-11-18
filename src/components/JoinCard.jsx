import { motion as Motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export default function JoinCard({ parcours, langue }) {
  const isDonation = parcours.titre.fr === 'Devenir donateur' || parcours.titre.en === 'Donate'
  const donationUrl = 'https://www.helloasso.com/associations/the-n-takou'

  const handleClick = () => {
    if (isDonation) {
      window.open(donationUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Motion.div
      className="rounded-none border border-pureWhite/20 bg-deepBlack text-pureWhite p-4 md:p-8 space-y-3 md:space-y-4 shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2 md:gap-3">
        <div className="h-10 w-10 md:h-12 md:w-12 bg-darkYellow flex items-center justify-center text-deepBlack shadow-[0_0_15px_rgba(212,175,55,0.6)]">
          <FaHeart className="text-sm md:text-base" />
        </div>
        <h3 className="font-burbank text-xl md:text-3xl text-darkYellow">{parcours.titre[langue]}</h3>
      </div>
      <p className="text-sm md:text-base text-pureWhite/80">{parcours.description[langue]}</p>
      <button 
        onClick={handleClick}
        className="group inline-flex items-center gap-2 rounded-none border-2 border-darkYellow bg-darkYellow px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold text-deepBlack uppercase tracking-widest hover:bg-deepBlack hover:text-darkYellow hover:border-darkYellow transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.7)]"
      >
        {parcours.cta[langue]}
      </button>
    </Motion.div>
  )
}

