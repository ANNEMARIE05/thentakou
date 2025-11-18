import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 320)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 h-10 w-10 md:h-14 md:w-14 rounded-none border-2 border-darkYellow bg-darkYellow text-deepBlack shadow-jauneFort text-lg md:text-2xl flex items-center justify-center hover:bg-deepBlack hover:text-darkYellow hover:scale-110 transition-all duration-300"
      aria-label="Remonter"
    >
      <FaArrowUp />
    </button>
  )
}

