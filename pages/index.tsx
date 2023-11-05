import Skeleton from 'components/Skeleton'
import Thumbs from 'components/Thumbs'
import { latestCards, latestDecks } from 'lib/demo.data'

export default function HomePage() {
  return (
    <>
      <Skeleton>
        <section>
          <Thumbs title="Latest decks" thumbs={latestDecks} />
          {/* <Thumbs title="Latest cards" thumbs={latestCards} /> */}
        </section>
      </Skeleton>
    </>
  )
}
