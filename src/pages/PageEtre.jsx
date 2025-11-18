import { motion as Motion } from 'framer-motion'
import { FaHeart, FaHandsHelping, FaDonate, FaBuilding, FaStore } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { parcoursEngagement } from '../data/siteContent'

export default function PageEtre({ langue, textes }) {
  const navigate = useNavigate()
  const engagementIcons = [
    { icon: FaHandsHelping, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { icon: FaDonate, color: 'text-green-500', bgColor: 'bg-green-50' },
    { icon: FaBuilding, color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { icon: FaStore, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-pureWhite">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1600)`
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
              {langue === 'fr' ? 'Être N\'Takou' : 'Join The N\'Takou'}
            </p>
            <h1 className="font-burbank text-4xl md:text-6xl leading-tight text-pureWhite">
              {langue === 'fr' ? 'Rejoignez le mouvement' : 'Join the movement'}
            </h1>
          </Motion.div>
        </div>
      </section>

      {/* Main Content Section - Lighter and Warmer */}
      <section className="bg-pureWhite py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-16">
          <div className="text-center space-y-4">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-burbank text-4xl md:text-5xl text-deepBlack mb-4">
                {langue === 'fr' ? 'Comment nous rejoindre ?' : 'How to join us?'}
              </h2>
              <p className="text-xl text-dusk/80 max-w-3xl mx-auto">
                {langue === 'fr' 
                  ? 'Choisissez la façon qui vous correspond le mieux pour faire partie de cette belle aventure humaine'
                  : 'Choose the way that suits you best to be part of this beautiful human adventure'}
              </p>
            </Motion.div>
          </div>

          {/* Engagement Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {parcoursEngagement.map((parcours, index) => {
              const IconComponent = engagementIcons[index]?.icon || FaHeart
              const iconColor = engagementIcons[index]?.color || 'text-darkYellow'
              const bgColor = engagementIcons[index]?.bgColor || 'bg-yellow-50'
              
              // Redirect all engagement buttons to contact page
              const handleClick = () => {
                navigate('/contact#contact-form')
              }

              return (
                <Motion.div
                  key={parcours.titre.fr}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full rounded-none border border-dusk/10 bg-pureWhite p-8 shadow-[0_18px_40px_rgba(0,0,0,0.09)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:border-darkYellow/30 transition-all duration-300 hover:-translate-y-1">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-none border border-dusk/10 ${bgColor} mb-6 group-hover:border-darkYellow/30 transition-all duration-300`}>
                      <IconComponent className={`text-3xl ${iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="font-burbank text-3xl text-deepBlack mb-4 group-hover:text-darkYellow transition-colors duration-300">
                      {parcours.titre[langue]}
                    </h3>

                    {/* Description */}
                    <p className="text-dusk/80 text-lg leading-relaxed mb-6">
                      {parcours.description[langue]}
                    </p>

                    {/* CTA Button */}
                    <button 
                      onClick={handleClick}
                      className="group/btn inline-flex items-center gap-2 rounded-none border-2 border-darkYellow bg-darkYellow px-6 py-3 font-semibold text-deepBlack uppercase tracking-widest hover:bg-pureWhite hover:text-darkYellow hover:border-darkYellow transition-all duration-300"
                    >
                      {parcours.cta[langue]}
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </Motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-dusk/5 py-20 border-t border-dusk/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-none border border-dusk/10 bg-pureWhite mb-4 shadow-[0_18px_40px_rgba(0,0,0,0.09)]">
              <FaHeart className="text-4xl text-darkYellow" />
            </div>
            <h2 className="font-burbank text-4xl md:text-5xl text-deepBlack">
              {langue === 'fr' ? 'Ensemble, faisons la différence' : 'Together, let\'s make a difference'}
            </h2>
            <p className="text-xl text-dusk/80 max-w-3xl mx-auto leading-relaxed">
              {textes.introEngagement}
            </p>
          </Motion.div>
        </div>
      </section>
    </div>
  )
}


