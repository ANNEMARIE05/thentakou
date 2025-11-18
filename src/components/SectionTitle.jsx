export default function SectionTitle({ eyebrow, title, subtitle, invert = false }) {
  const baseText = invert ? 'text-pureWhite' : 'text-deepBlack'
  const subText = invert ? 'text-pureWhite/80' : 'text-dusk/80'
  const eyebrowText = invert ? 'text-darkYellow' : 'text-darkYellow'

  return (
    <div className="text-center space-y-3 max-w-3xl mx-auto">
      {eyebrow && (
        <p
          className={`uppercase tracking-[0.3em] font-semibold text-xs ${eyebrowText}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`font-burbank text-4xl md:text-5xl ${baseText}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${subText}`}>{subtitle}</p>
      )}
    </div>
  )
}

