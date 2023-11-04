import Skeleton from 'components/Skeleton'
import CardThumb from 'components/CardThumb'

export default function HomePage() {
  const decks = [
    {
      id: 1,
      parent: 'Path 1',
      title: 'Deck title 1',
      image: 'image-2e85232598acec705813b46b51785ea0db986b88-4096x2733-jpg',
      description:
        'Brief explaination of the deck. Maybe some few words as well.',
      footnote: {
        total: 23,
        note: 'cards in total',
      },
    },
    {
      id: 2,
      parent: 'Path 2',
      title: 'Deck title 2',
      image: 'image-2e85232598acec705813b46b51785ea0db986b88-4096x2733-jpg',
      description:
        'Brief explaination of the deck. Maybe some few words as well.',
      footnote: {
        total: 60,
        note: 'cards in total',
      },
    },
    {
      id: 3,
      parent: 'Path 3',
      title: 'Deck title 3',
      image: 'image-2e85232598acec705813b46b51785ea0db986b88-4096x2733-jpg',
      description:
        'Brief explaination of the deck. Maybe some few words as well.',
      footnote: {
        total: 51,
        note: 'cards in total',
      },
    },
  ]

  return (
    <>
      <Skeleton>
        <section className="body-font">
          <div className="container px-5 py-8 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
              Latest decks
            </h1>

            <div className="flex flex-wrap -m-2">
              {decks.map((deck) => (
                <CardThumb deck={deck} />
              ))}
            </div>
          </div>
        </section>
      </Skeleton>
    </>
  )
}
