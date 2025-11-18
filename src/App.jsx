import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import PageActions from './pages/PageActions'
import PageAkwaba from './pages/PageAkwaba'
import PageApropos from './pages/PageApropos'
import PageContact from './pages/PageContact'
import PageEtre from './pages/PageEtre'
import PagePresse from './pages/PagePresse'
import { textesLangues } from './data/siteContent'
import './App.css'

const ScrollToTopOnRoute = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  return null
}

function App() {
  const [langue, definirLangue] = useState('fr')
  const [donneesFormulaire, definirDonneesFormulaire] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    object: '',
    message: '',
  })
  const [messageRetour, definirMessageRetour] = useState('')
  const [envoiEnCours, definirEnvoiEnCours] = useState(false)

  const textes = textesLangues[langue]

  const envoyerFormulaire = (event) => {
    event.preventDefault()
    definirEnvoiEnCours(true)
    setTimeout(() => {
      definirEnvoiEnCours(false)
      definirMessageRetour(textes.succesFormulaire)
      definirDonneesFormulaire({ nom: '', prenom: '', email: '', telephone: '', object: '', message: '' })
    }, 900)
  }

  return (
    <div className="bg-pureWhite text-dusk">
      <ScrollToTopOnRoute />
      <NavBar langue={langue} changerLangue={definirLangue} />
      <main className="pt-24 space-y-16">
        <Routes>
          <Route path="/" element={<PageAkwaba langue={langue} textes={textes} />} />
          <Route path="/apropos" element={<PageApropos langue={langue} textes={textes} />} />
          <Route path="/actions" element={<PageActions langue={langue} textes={textes} />} />
          <Route path="/presse" element={<PagePresse langue={langue} textes={textes} />} />
          <Route path="/etre" element={<PageEtre langue={langue} textes={textes} />} />
          <Route
            path="/contact"
            element={
              <PageContact
                langue={langue}
                textes={textes}
                donneesFormulaire={donneesFormulaire}
                definirDonneesFormulaire={definirDonneesFormulaire}
                envoyerFormulaire={envoyerFormulaire}
                envoiEnCours={envoiEnCours}
                messageRetour={messageRetour}
              />
            }
          />
          <Route path="*" element={<PageAkwaba langue={langue} textes={textes} />} />
        </Routes>
      </main>
      <Footer langue={langue} />
      <ScrollToTopButton />
    </div>
  )
}

export default App
