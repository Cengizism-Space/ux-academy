import Container from 'components/Blog/BlogContainer'
import BlogHeader from 'components/Blog/BlogHeader'
import Layout from 'components/Blog/BlogLayout'
import HeroCard from 'components/Card/HeroCard'
import IndexPageHead from 'components/Blog/IndexPageHead'
import MoreCards from 'components/Card/MoreCards'
import * as demo from 'lib/demo.data'
import type { Card, Settings } from 'lib/sanity.queries'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  cards: Card[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, cards, settings } = props
  const [heroCard, ...moreCards] = cards || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
          {heroCard && (
            <HeroCard
              title={heroCard.title}
              coverImage={heroCard.coverImage}
              date={heroCard.date}
              source={heroCard.source}
              slug={heroCard.slug}
              summary={heroCard.summary}
            />
          )}
          {moreCards.length > 0 && <MoreCards cards={moreCards} />}
        </Container>
      </Layout>
    </>
  )
}
