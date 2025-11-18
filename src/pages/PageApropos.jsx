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
            src="/images/accueil principal 1.jpg" 
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
            <h1 className="font-burbank text-3xl md:text-4xl lg:text-6xl leading-tight text-pureWhite">
              {langue === 'fr' ? 'THE N\'TAKOU' : 'THE N\'TAKOU'}
            </h1>
          </Motion.div>
        </div>
      </section>

      <div className="space-y-10 md:space-y-20 py-10 md:py-20">

      <section className="mx-auto max-w-6xl px-4 md:px-6 space-y-6 md:space-y-10">
        <SectionTitle
          eyebrow="Leadership"
          title={langue === 'fr' ? 'Leadership' : 'Leadership'}
          subtitle={langue === 'fr' ? 'La Fondatrice' : 'The Founder'}
        />
        <div className="grid gap-6 md:gap-12 md:grid-cols-2 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="font-burbank text-2xl md:text-3xl lg:text-4xl text-deepBlack">
              {equipeLeadership[0].nom}
            </h3>
            <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-bold text-darkYellow">
              {equipeLeadership[0].titre[langue]}
            </p>
            <div className="space-y-2 md:space-y-4 text-sm md:text-base text-dusk/80 leading-relaxed">
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
      <section className="mx-auto max-w-6xl px-4 md:px-6 space-y-6 md:space-y-12">
        <div className="grid gap-6 md:gap-12 md:grid-cols-2 items-stretch">
          {/* Card 1 */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 md:gap-8 items-center h-full"
          >
            <div className="flex-1 space-y-2 md:space-y-4">
              <p className="text-xs md:text-sm text-dusk/80 leading-relaxed">
                {langue === 'fr'
                  ? "Selon l'Institut de statistique de l'UNESCO (données de l'ISU), le taux d'achèvement de l'enseignement primaire était de 68 % en 2022 pour les filles et de 69 % pour les garçons."
                  : "According to the UNESCO Institute for Statistics (UIS data), the primary school completion rate was 68% in 2022 for girls and 69% for boys."}
              </p>
            </div>
            <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
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
            className="flex flex-col md:flex-row gap-4 md:gap-8 items-center h-full"
          >
            <div className="flex-1 space-y-2 md:space-y-4">
              <p className="text-xs md:text-sm text-dusk/80 leading-relaxed">
                {langue === 'fr'
                  ? "Au Cameroun, les taux bruts de scolarisation dans l'enseignement secondaire révèlent un écart entre les sexes, avec 43 % de filles scolarisées contre 48 % de garçons. Le faible niveau d'éducation, en particulier pour les filles, est dû en partie au nombre relativement élevé de mariages d'enfants et de grossesses précoces."
                  : "In Cameroon, gross secondary school enrollment rates reveal a gender gap, with 43% of girls enrolled compared to 48% of boys. The low level of education, particularly for girls, is partly due to the relatively high number of child marriages and early pregnancies."}
              </p>
            </div>
            <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
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
            className="flex flex-col md:flex-row gap-4 md:gap-8 items-center h-full"
          >
            <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <img
                src="/images/ODD - Logo/odd 2.jpg"
                alt={langue === 'fr' ? 'Coopération Nord/Sud' : 'North/South Cooperation'}
                className="w-full h-full object-cover rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
            <div className="flex-1 space-y-2 md:space-y-4">
              <p className="text-xs md:text-sm text-dusk/80 leading-relaxed">
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
            className="flex flex-col md:flex-row gap-4 md:gap-8 items-center h-full"
          >
            <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <img
                src="/images/ODD - Logo/odd 3.jpg"
                alt={langue === 'fr' ? 'Impact' : 'Impact'}
                className="w-full h-full object-cover rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
            <div className="flex-1 space-y-2 md:space-y-4">
              <p className="text-xs md:text-sm text-dusk/80 leading-relaxed">
                {langue === 'fr'
                  ? "Depuis 2015, nous avons accompagné plus de 3500 bénéficiaires dans 3 pays, ouvert 6 bibliothèques scolaires et créé un impact durable sur l'éducation en Afrique."
                  : "Since 2015, we have supported more than 3500 beneficiaries in 3 countries, opened 6 school libraries and created a lasting impact on education in Africa."}
              </p>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="bg-deepBlack py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-4 md:space-y-6">
          <h2 className="font-burbank text-2xl md:text-4xl lg:text-5xl text-pureWhite text-center mb-6 md:mb-12">
            {langue === 'fr' ? 'Nos valeurs' : 'Our values'}
          </h2>
          <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                  className="flex flex-col items-center gap-2 md:gap-4"
                >
                  <div className="border-2 border-darkYellow p-4 md:p-6 rounded-none flex items-center justify-center min-h-[80px] min-w-[80px] md:min-h-[120px] md:min-w-[120px]">
                    <img 
                      src={valeur.image} 
                      alt={valeur[langue]}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-burbank text-base md:text-xl lg:text-2xl text-darkYellow text-center">
                    {valeur[langue]}
                  </p>
                </Motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Vidéo YouTube */}
      <section className="bg-pureWhite py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-8"
          >
            <h2 className="font-burbank text-2xl md:text-4xl lg:text-5xl text-deepBlack text-center">
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

      {/* Section Informations Organisation - En bas de page */}
      <section className="bg-dusk/5 py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-12"
          >
            {/* Description de l'organisation */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="font-burbank text-2xl md:text-3xl lg:text-4xl text-deepBlack text-center">
                {langue === 'fr' ? 'À propos de The N\'Takou' : 'About The N\'Takou'}
              </h2>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
                <div className="flex-shrink-0 w-full md:w-2/5 lg:w-1/2">
                  <img
                    src="/images/sur le terrain.JPG"
                    alt={langue === 'fr' ? 'The N\'Takou sur le terrain' : 'The N\'Takou on the field'}
                    className="w-full h-auto object-cover shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                  />
                </div>
                <div className="flex-1 w-full">
                  <p className="text-xs md:text-sm lg:text-base text-dusk/90 leading-relaxed">
                    {textes.descriptionOrganisation || (langue === 'fr' 
                      ? "The N'Takou est une organisation internationale engagée sur de nombreux fronts de lutte contre les inégalités d'accès à l'éducation populaire dans 3 pays en Afrique : le Cameroun, la Côte d'Ivoire et la République Démocratique du Congo. À partir de nos programmes et missions humanitaires, nous mettons à disposition des enfants, des bibliothèques et ludothèques dans leurs établissements scolaires en Afrique ainsi qu'une banque alimentaire pour les cantines scolaires. Nous nous réservons le droit de prendre la parole pour dénoncer les insuffisances et les abus du système éducatif dans les pays d'intervention. Nos actions s'inscrivent dans une dynamique Nord/Sud et s'alignent sur les Objectifs de Développement Durable (ODD) de l'Organisation des Nations Unies (ONU). The N'Takou vient en aide aux enfants en Afrique indépendamment de leur race, de leur tribu, de leur religion ou de leur sexe."
                      : "The N'Takou is an international organization committed on many fronts to fighting inequalities in access to popular education in 3 African countries: Cameroon, Côte d'Ivoire and the Democratic Republic of Congo. Through our programs and humanitarian missions, we provide children with libraries and game libraries in their schools in Africa, as well as a food bank for school canteens. We reserve the right to speak out to denounce the shortcomings and abuses of the education system in the countries where we operate. Our actions are part of a North/South dynamic and align with the Sustainable Development Goals (SDGs) of the United Nations (UN). The N'Takou helps children in Africa regardless of their race, tribe, religion or gender.")}
                  </p>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
      </div>
    </div>
  )
}


