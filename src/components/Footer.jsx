import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa'
import { liensSociaux } from '../data/siteContent'

const iconesSociaux = {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
}

const elementsNavigation = [
  { chemin: '/', etiquette: { fr: 'AKWABA', en: 'AKWABA' } },
  { chemin: '/apropos', etiquette: { fr: "THE N'TAKOU", en: "THE N'TAKOU" } },
  { chemin: '/actions', etiquette: { fr: 'SUR LE TERRAIN', en: 'ON THE FIELD' } },
  { chemin: '/presse', etiquette: { fr: 'SALLE DE PRESSE', en: 'PRESS ROOM' } },
  { chemin: '/etre', etiquette: { fr: "ÊTRE N'TAKOU", en: "BEING N'TAKOU" } },
  { chemin: '/contact', etiquette: { fr: 'CONTACT', en: 'CONTACT' } },
]

export default function Footer({ langue }) {
  return (
    <footer className="mt-24 bg-deepBlack border-t-4 border-darkYellow text-pureWhite">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Colonne 1: Logo et description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="The N'Takou" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-pureWhite/80 leading-relaxed">
              {langue === 'fr'
                ? "Organisation humanitaire engagée pour l'accès à l'éducation populaire en Afrique."
                : 'Humanitarian organization committed to access to popular education in Africa.'}
            </p>
          </div>

          {/* Colonne 2: Navigation */}
          <div className="space-y-4">
            <h3 className="font-burbank text-xl text-darkYellow uppercase tracking-wide">
              {langue === 'fr' ? 'Navigation' : 'Navigation'}
            </h3>
            <ul className="space-y-2">
              {elementsNavigation.map((element) => (
                <li key={element.chemin}>
                  <Link
                    to={element.chemin}
                    className="text-sm text-pureWhite/80 hover:text-darkYellow transition-colors duration-300"
                  >
                    {element.etiquette[langue]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Contact */}
          <div className="space-y-4">
            <h3 className="font-burbank text-xl text-darkYellow uppercase tracking-wide">
              {langue === 'fr' ? 'Contact' : 'Contact'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-darkYellow flex-shrink-0" />
                <a
                  href="mailto:hello@thentakou.com"
                  className="text-sm text-pureWhite/80 hover:text-darkYellow transition-colors duration-300"
                >
                  hello@thentakou.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-darkYellow flex-shrink-0" />
                <a
                  href="tel:+2250569719994"
                  className="text-sm text-pureWhite/80 hover:text-darkYellow transition-colors duration-300"
                >
                  (+225) 05 69 71 99 94
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.helloasso.com/associations/the-n-takou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-darkYellow text-deepBlack font-semibold text-sm uppercase tracking-wide hover:bg-darkYellow/90 transition-all duration-300"
                >
                  {langue === 'fr' ? 'Faire un don' : 'Make a donation'}
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Réseaux sociaux */}
          <div className="space-y-4">
            <h3 className="font-burbank text-xl text-darkYellow uppercase tracking-wide">
              {langue === 'fr' ? 'Suivez-nous' : 'Follow us'}
            </h3>
            <div className="flex gap-3 flex-wrap">
              {liensSociaux.map((social) => {
                const Icone = iconesSociaux[social.icone]
                return (
                  <a
                    key={social.nom}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 bg-darkYellow/20 border-2 border-darkYellow text-darkYellow flex items-center justify-center hover:bg-darkYellow hover:text-deepBlack transition-all duration-300"
                    aria-label={social.nom}
                  >
                    <Icone />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-pureWhite/10 my-8" />

        {/* Bas du footer: Copyright et partenaires */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-pureWhite/80">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} The N'Takou. {langue === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <p className="text-center md:text-right">
            {langue === 'fr' ? 'Réalisé avec ❤️ grâce au programme' : 'Made with ❤️ thanks to'}{' '}
            <a
              className="text-darkYellow hover:text-pureWhite underline transition-colors"
              href="https://european-union.europa.eu/contact-eu/countries/cote-divoire_fr"
              target="_blank"
              rel="noreferrer"
            >
              Union Européenne Côte d'Ivoire
            </a>{' '}
            &{' '}
            <a
              className="text-darkYellow hover:text-pureWhite underline transition-colors"
              href="https://www.giz.de/en/worldwide/324.html"
              target="_blank"
              rel="noreferrer"
            >
              GIZ
            </a>{' '}
            {langue === 'fr'
              ? 'dans le cadre du programme We.Code.'
              : 'through the We.Code program.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

