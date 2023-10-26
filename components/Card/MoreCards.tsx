import CardPreview from 'components/Card/CardPreview'
import type { Card } from 'lib/sanity.queries'

export default function MoreCards({ cards }: { cards: Card[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Cards
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {cards.map((card) => (
          <CardPreview
            key={card._id}
            title={card.title}
            coverImage={card.coverImage}
            date={card.date}
            source={card.source}
            slug={card.slug}
            summary={card.summary}
          />
        ))}
      </div>
    </section>
  )
}
