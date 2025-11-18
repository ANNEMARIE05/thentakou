import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const elementsNavigation = [
  { chemin: '/', etiquette: { fr: 'AKWABA', en: 'AKWABA' } },
  { chemin: '/apropos', etiquette: { fr: "THE N'TAKOU", en: "THE N'TAKOU" } },
  { chemin: '/actions', etiquette: { fr: 'SUR LE TERRAIN', en: 'ON THE FIELD' } },
  { chemin: '/presse', etiquette: { fr: 'SALLE DE PRESSE', en: 'PRESS ROOM' } },
  { chemin: '/etre', etiquette: { fr: "ÊTRE N'TAKOU", en: "BEING N'TAKOU" } },
  { chemin: '/contact', etiquette: { fr: 'CONTACT', en: 'CONTACT' } },
]

const BasculeLangue = ({ courante, changer }) => (
  <div className="flex items-center gap-0 bg-pureWhite border-2 border-darkYellow rounded-sm overflow-hidden text-xs font-semibold uppercase">
    {['fr', 'en'].map((langue) => (
      <button
        key={langue}
        onClick={() => changer(langue)}
        className={`px-4 py-2 transition-all duration-300 font-bold ${
          courante === langue
            ? 'bg-darkYellow text-deepBlack shadow-[0_0_10px_rgba(212,175,55,0.6)]'
            : 'text-deepBlack hover:text-darkYellow hover:bg-darkYellow/10'
        }`}
      >
        {langue.toUpperCase()}
      </button>
    ))}
  </div>
)

const LiensNavigation = ({ langue, fermer }) => (
  <ul className="flex flex-col gap-4 text-lg font-semibold uppercase font-bebas tracking-wide lg:flex-row lg:text-base lg:gap-8">
    {elementsNavigation.map((element) => (
      <li key={element.chemin}>
        <NavLink
          to={element.chemin}
          onClick={fermer}
          className={({ isActive }) =>
            `relative transition-all duration-300 px-3 py-2 whitespace-nowrap ${
              isActive
                ? 'text-darkYellow font-bold'
                : 'text-deepBlack/90 hover:text-darkYellow'
            } ${
              isActive
                ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-darkYellow after:shadow-[0_0_10px_rgba(212,175,55,0.6)]'
                : 'hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-darkYellow/50'
            }`
          }
        >
          {element.etiquette[langue]}
        </NavLink>
      </li>
    ))}
  </ul>
)

export default function NavBar({ langue, changerLangue }) {
  const [ouvert, definirOuvert] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full bg-pureWhite border-b-4 border-darkYellow shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 gap-4">
          {/* Logo image */}
          <NavLink to="/" className="flex items-center group flex-shrink-0">
            <img 
              src="/images/logo.png" 
              alt="The N'Takou" 
              className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </NavLink>

          {/* Navigation centrale */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <LiensNavigation langue={langue} fermer={() => definirOuvert(false)} />
          </div>

          {/* Actions à droite */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <a
              href="https://www.helloasso.com/associations/the-n-takou"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-darkYellow text-deepBlack font-bold uppercase text-sm tracking-wide hover:bg-darkYellow/90 hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300 rounded-sm whitespace-nowrap"
            >
              {langue === 'fr' ? 'FAIRE UN DON' : 'MAKE A DONATION'}
            </a>
            <BasculeLangue courante={langue} changer={changerLangue} />
          </div>

          {/* Bouton menu mobile */}
          <button
            className="text-darkYellow text-2xl md:hidden hover:text-deepBlack transition-colors flex-shrink-0"
            onClick={() => definirOuvert((precedent) => !precedent)}
            aria-label="Menu"
          >
            {ouvert ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {ouvert && (
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden w-full bg-pureWhite border-b-4 border-darkYellow px-6 py-6 space-y-6 shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
        >
          <LiensNavigation langue={langue} fermer={() => definirOuvert(false)} />
          <a
            href="https://www.helloasso.com/associations/the-n-takou"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => definirOuvert(false)}
            className="block w-full text-center px-4 py-3 bg-darkYellow text-deepBlack font-bold uppercase text-sm tracking-wide hover:bg-darkYellow/90 hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300 rounded-sm"
          >
            {langue === 'fr' ? 'FAIRE UN DON' : 'MAKE A DONATION'}
          </a>
          <BasculeLangue courante={langue} changer={changerLangue} />
        </Motion.div>
      )}
    </header>
  )
}

