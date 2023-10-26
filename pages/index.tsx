import IndexPage from 'components/Blog/IndexPage'
import PreviewIndexPage from 'components/Preview/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import { getAllCards, getClient, getSettings } from 'lib/sanity.client'
import { Card, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  cards: Card[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { cards, settings, draftMode } = props

  if (draftMode) {
    return <PreviewIndexPage cards={cards} settings={settings} />
  }

  return <IndexPage cards={cards} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, cards = []] = await Promise.all([
    getSettings(client),
    getAllCards(client),
  ])

  return {
    props: {
      cards,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
