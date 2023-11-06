import Skeleton from 'components/Skeleton'
import Thumbs from 'components/Thumbs'
import { fetchLatestCards,fetchLatestDecks } from 'lib/decks.api'

export default function HomePage() {
  const latestDecks = fetchLatestDecks()
  const latestCards = fetchLatestCards()

  return (
    <>
      <Skeleton>
        <section>
          <Thumbs title="Latest decks" thumbs={latestDecks} />
          <Thumbs title="Latest cards" thumbs={latestCards} />
        </section>
      </Skeleton>
    </>
  )
}
