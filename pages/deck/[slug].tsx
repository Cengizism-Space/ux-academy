import IndexPage from 'components/Library/IndexPage'
import PreviewIndexPage from 'components/Preview/PreviewIndexPage'
import Skeleton from 'components/Skeleton'
import { iThumb } from 'components/Thumb'
import Thumbs from 'components/Thumbs'
import * as demo from 'lib/demo.data'
import { readToken } from 'lib/sanity.api'
import { getAllCards, getClient, getSettings } from 'lib/sanity.client'
import { Card, Settings } from 'lib/sanity.queries'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps {
  deck: iThumb
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { deck } = props

  console.log(deck)

  return (
    <Skeleton>
      <section>
        <span className="block text-3xl title-font font-medium text-gray-500">
          {deck.title}
        </span>
      </section>
    </Skeleton>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (
  ctx,
): Promise<GetStaticPropsResult<PageProps>> => {
  const { params = {} } = ctx

  const slugs = demo.mockDecks

  function findDeck(arr, slug) {
    return arr.find((el) => {
      return el.slug === slug
    })
  }

  const deck = findDeck(slugs, params.slug)

  if (!deck) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      deck,
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
