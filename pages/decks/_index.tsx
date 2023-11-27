import Skeleton from 'components/Skeleton'
import Thumbs from 'components/Thumbs'
import { mockDecks } from 'lib/demo.data'

export default function DecksPage() {
  const decksByPath = mockDecks.reduce((grouped, deck) => {
    if (!grouped[deck.parent]) grouped[deck.parent] = []
    grouped[deck.parent].push(deck)
    return grouped
  }, {})

  return (
    <>
      <Skeleton>
        <section>
          {Object.keys(decksByPath).map((path, i) => (
            <Thumbs key={i} title={path} thumbs={decksByPath[path]} />
          ))}
        </section>
      </Skeleton>
    </>
  )
}
