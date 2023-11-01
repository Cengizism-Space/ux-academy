import CardPage from 'components/Card/CardPage'
import PreviewCardPage from 'components/Preview/PreviewCardPage'
import { readToken } from 'lib/sanity.api'
import {
  getAllCardsSlugs,
  getCardAndMoreCards,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import { Card, Settings } from 'lib/sanity.queries'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  card: Card
  moreCards: Card[]
  settings?: Settings
}

interface Query {
  [key: string]: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, card, moreCards, draftMode } = props

  if (draftMode) {
    return (
      <PreviewCardPage card={card} moreCards={moreCards} settings={settings} />
    )
  }

  return <CardPage card={card} moreCards={moreCards} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (
  ctx,
): Promise<GetStaticPropsResult<PageProps>> => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, { card, moreCards }] = await Promise.all([
    getSettings(client),
    getCardAndMoreCards(client, params.slug),
  ])

  if (!card) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      card,
      moreCards,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllCardsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/cards/${slug}`) || [],
    fallback: 'blocking',
  }
}
