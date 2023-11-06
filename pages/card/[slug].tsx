import Skeleton from 'components/Skeleton'
import { iThumb } from 'components/Thumb'
import Thumb from 'components/Thumb'
import { findCard } from 'lib/decks.api'
import * as demo from 'lib/demo.data'
import { GetStaticProps, GetStaticPropsResult } from 'next'

interface PageProps {
  card: iThumb
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { card } = props

  return (
    <Skeleton>
      <div className="container px-5 py-8 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
          {card.title}
        </h1>
        <div className="flex flex-wrap">
          <Thumb thumb={card} />
        </div>
      </div>
    </Skeleton>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (
  context,
): Promise<GetStaticPropsResult<PageProps>> => {
  const { params = {} } = context

  const card = findCard(demo.mockCards, params.slug)

  if (!card) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      card,
    },
  }
}

export const getStaticPaths = async () => {
  const cards = demo.mockCards

  return {
    paths: cards?.map(({ slug }) => `/card/${slug}`) || [],
    fallback: 'blocking',
  }
}
