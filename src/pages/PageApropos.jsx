import { motion as Motion } from 'framer-motion'

import SectionTitle from '../components/SectionTitle'
import { equipeLeadership } from '../data/siteContent'

export default function PageApropos({ langue, textes }) {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-pureWhite overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/Asset 1.jpg" 
            alt="The N'Takou"
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
              {langue === 'fr' ? 'À propos' : 'About Us'}
            </p>
            <h1 className="font-burbank text-4xl md:text-6xl leading-tight text-pureWhite">
              {langue === 'fr' ? 'THE N\'TAKOU' : 'THE N\'TAKOU'}
            </h1>
          </Motion.div>
        </div>
      </section>

      <div className="space-y-20 py-20">
      {/* Section Introduction */}
      <section className="mx-auto max-w-6xl px-6">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-dusk/80 leading-relaxed text-base md:text-lg max-w-4xl mx-auto text-center">
            {langue === 'fr' 
              ? "Créée en 2015 à Asnières-sur-Seine, en France, The N'Takou est une organisation humanitaire engagée ici et là-bas auprès des enfants issus des foyers à faibles revenus. Inspirée du système éducatif français et du miracle de Han River Sud-Coréen, The N'Takou milite pour l'accès à l'éducation populaire en Afrique."
              : "Founded in 2015 in Asnières-sur-Seine, France, The N'Takou is a humanitarian organization committed here and there to children from low-income families. Inspired by the French education system and the South Korean Han River miracle, The N'Takou advocates for access to popular education in Africa."}
          </p>
        </Motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 space-y-10">
        <SectionTitle
          eyebrow="Leadership"
          title={langue === 'fr' ? 'Leadership' : 'Leadership'}
          subtitle={langue === 'fr' ? 'La Fondatrice' : 'The Founder'}
        />
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-burbank text-3xl md:text-4xl text-deepBlack">
              {equipeLeadership[0].nom}
            </h3>
            <p className="uppercase tracking-[0.3em] text-sm font-bold text-darkYellow">
              {equipeLeadership[0].titre[langue]}
            </p>
            <div className="space-y-4 text-dusk/80 leading-relaxed">
              <p>{equipeLeadership[0].focus[langue]}</p>
            </div>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={equipeLeadership[0].image}
              alt={equipeLeadership[0].nom}
              className="w-full h-auto object-cover shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            />
          </Motion.div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="mx-auto max-w-6xl px-6 space-y-12">
        <div className="grid gap-12 md:grid-cols-2 items-stretch">
          {/* Card 1 */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-8 items-center h-full"
          >
            <div className="flex-1 space-y-4">
              <p className="text-dusk/80 leading-relaxed text-sm">
                {langue === 'fr'
                  ? "Selon l'Institut de statistique de l'UNESCO (données de l'ISU), le taux d'achèvement de l'enseignement primaire était de 68 % en 2022 pour les filles et de 69 % pour les garçons."
                  : "According to the UNESCO Institute for Statistics (UIS data), the primary school completion rate was 68% in 2022 for girls and 69% for boys."}
              </p>
            </div>
            <div className="flex-shrink-0 w-56 h-56 md:w-64 md:h-64">
              <img
                src="/images/ODD - Logo/ODD 4.jpg"
                alt={langue === 'fr' ? 'Éducation de Qualité' : 'Quality Education'}
                className="w-full h-full object-cover rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
          </Motion.div>

          {/* Card 2 */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-8 items-center h-full"
          >
            <div className="flex-1 space-y-4">
              <p className="text-dusk/80 leading-relaxed text-sm">
                {langue === 'fr'
                  ? "Au Cameroun, les taux bruts de scolarisation dans l'enseignement secondaire révèlent un écart entre les sexes, avec 43 % de filles scolarisées contre 48 % de garçons. Le faible niveau d'éducation, en particulier pour les filles, est dû en partie au nombre relativement élevé de mariages d'enfants et de grossesses précoces."
                  : "In Cameroon, gross secondary school enrollment rates reveal a gender gap, with 43% of girls enrolled compared to 48% of boys. The low level of education, particularly for girls, is partly due to the relatively high number of child marriages and early pregnancies."}
              </p>
            </div>
            <div className="flex-shrink-0 w-56 h-56 md:w-64 md:h-64">
              <img
                src="/images/ODD - Logo/odd 1.jpg"
                alt={langue === 'fr' ? 'Partenariats' : 'Partnerships'}
                className="w-full h-full object-cover rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
          </Motion.div>

          {/* Card 3 - Image à gauche, texte à droite */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-8 items-center h-full"
          >
            <div className="flex-shrink-0 w-56 h-56 md:w-64 md:h-64">
              <img
                src="/images/ODD - Logo/odd 2.jpg"
                alt={langue === 'fr' ? 'Coopération Nord/Sud' : 'North/South Cooperation'}
                className="w-full h-full object-cover rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-dusk/80 leading-relaxed text-sm">
                {langue === 'fr'
                  ? "The N'Takou répond à une dynamique Nord/Sud à travers un lien de coopération culturelle avec la France et a une approche très locale sur le terrain."
                  : "The N'Takou responds to a North/South dynamic through a link of cultural cooperation with France and has a very local approach on the ground."}
              </p>
            </div>
          </Motion.div>

          {/* Card 4 - Image à gauche, texte à droite */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-8 items-center h-full"
          >
            <div className="flex-shrink-0 w-56 h-56 md:w-64 md:h-64">
              <img
                src="/images/ODD - Logo/odd 3.jpg"
                alt={langue === 'fr' ? 'Impact' : 'Impact'}
                className="w-full h-full object-cover rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-dusk/80 leading-relaxed text-sm">
                {langue === 'fr'
                  ? "Depuis 2015, nous avons accompagné plus de 3500 bénéficiaires dans 3 pays, ouvert 6 bibliothèques scolaires et créé un impact durable sur l'éducation en Afrique."
                  : "Since 2015, we have supported more than 3500 beneficiaries in 3 countries, opened 6 school libraries and created a lasting impact on education in Africa."}
              </p>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="bg-deepBlack py-20">
        <div className="mx-auto max-w-6xl px-6 space-y-6">
          <h2 className="font-burbank text-4xl md:text-5xl text-pureWhite text-center mb-12">
            {langue === 'fr' ? 'Nos valeurs' : 'Our values'}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                fr: 'Transparence', 
                en: 'Transparency',
                image: '/images/Icones - Nos Valeurs/Transparence.png'
              },
              { 
                fr: 'Orienté Résultats', 
                en: 'Results-oriented',
                image: '/images/Icones - Nos Valeurs/Orienté résultat.png'
              },
              { 
                fr: 'Multiculturalisme', 
                en: 'Multiculturalism',
                image: '/images/Icones - Nos Valeurs/Multiculturalisme.png'
              },
              { 
                fr: 'Afro-Optimisme', 
                en: 'Afro-optimism',
                image: '/images/Icones - Nos Valeurs/Afro-Optismisme.png'
              },
            ].map((valeur, index) => {
              return (
                <Motion.div
                  key={valeur.fr}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="border-2 border-darkYellow p-6 rounded-none flex items-center justify-center min-h-[120px] min-w-[120px]">
                    <img 
                      src={valeur.image} 
                      alt={valeur[langue]}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-burbank text-xl md:text-2xl text-darkYellow text-center">
                    {valeur[langue]}
                  </p>
                </Motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Vidéo YouTube */}
      <section className="bg-pureWhite py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-burbank text-4xl md:text-5xl text-deepBlack text-center">
              {langue === 'fr' ? (
                <>
                  Découvrez <span className="text-darkYellow">The N'Takou</span>
                </>
              ) : (
                <>
                  Discover <span className="text-darkYellow">The N'Takou</span>
                </>
              )}
            </h2>
            <div className="relative w-full aspect-video max-w-4xl mx-auto shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
              <iframe
                src="https://www.youtube.com/embed/7B9H1VB9xFg?si=8nxgcqzarrw_HQ_R"
                title={langue === 'fr' ? 'Vidéo The N\'Takou' : 'The N\'Takou Video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </Motion.div>
        </div>
      </section>
      </div>
    </div>
  )
}


