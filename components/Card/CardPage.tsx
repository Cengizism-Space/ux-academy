import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'
import CardPageHead from 'components/Card/CardPageHead'
import CardTitle from 'components/Card/CardTitle'
import MoreCards from 'components/Card/MoreCards'
import SectionSeparator from 'components/Card/SectionSeparator'
import Container from 'components/Library/LibraryContainer'
import LibraryHeader from 'components/Library/LibraryHeader'
import Layout from 'components/Library/LibraryLayout'
import * as demo from 'lib/demo.data'
import type { Card, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

export interface CardPageProps {
  preview?: boolean
  loading?: boolean
  card: Card
  moreCards: Card[]
  settings: Settings
}

const NO_CardS: Card[] = []

export default function CardPage(props: CardPageProps) {
  const { preview, loading, moreCards = NO_CardS, card, settings } = props
  const { title = demo.title } = settings || {}

  const slug = card?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <CardPageHead settings={settings} card={card} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <LibraryHeader title={title} level={2} />
          {preview && !card ? (
            <CardTitle>Loading…</CardTitle>
          ) : (
            <>
              <article>
                <CardHeader
                  title={card.title}
                  coverImage={card.coverImage}
                  date={card.date}
                  source={card.source}
                />
                <CardBody content={card.content} />
              </article>
              <SectionSeparator />
              {moreCards?.length > 0 && <MoreCards cards={moreCards} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}
