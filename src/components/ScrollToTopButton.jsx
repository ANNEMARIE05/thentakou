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
      className="fixed bottom-6 right-6 h-14 w-14 rounded-none border-2 border-darkYellow bg-darkYellow text-deepBlack shadow-jauneFort text-2xl flex items-center justify-center hover:bg-deepBlack hover:text-darkYellow hover:scale-110 transition-all duration-300"
      aria-label="Remonter"
    >
      <FaArrowUp />
    </button>
  )
}

