import Skeleton from 'components/Skeleton'
import { iThumb } from 'components/Thumb'
import Thumbs from 'components/Thumbs'
import { findCardsByDeck,findDeck } from 'lib/decks.api'
import * as demo from 'lib/demo.data'
import { GetStaticProps, GetStaticPropsResult } from 'next'

interface PageProps {
  deck: iThumb
  cards: Array<iThumb>
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { deck, cards } = props

  return (
    <Skeleton>
      <section>
        <Thumbs title={deck.title} thumbs={cards} />
      </section>
    </Skeleton>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (
  context,
): Promise<GetStaticPropsResult<PageProps>> => {
  const { params = {} } = context

  const deck = findDeck(demo.mockDecks, params.slug)
  const cards = findCardsByDeck(deck.id)

  if (!deck) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      deck,
      cards,
    },
  }
}

export const getStaticPaths = async () => {
  const decks = demo.mockDecks

  return {
    paths: decks?.map(({ slug }) => `/deck/${slug}`) || [],
    fallback: 'blocking',
  }
}
