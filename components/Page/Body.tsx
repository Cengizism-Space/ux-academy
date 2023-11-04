// import HeroCard from 'components/Card/HeroCard'
// import MoreCards from 'components/Card/MoreCards'
import AlertBanner from 'components/Library/AlertBanner'
import Head from 'components/Page/Head'
import * as demo from 'lib/demo.data'
import type { Card, Settings } from 'lib/sanity.queries'

import Content from './Content'
import Header from './Header'

interface PageProps {
  preview?: boolean
  loading?: boolean
  cards: Card[]
  settings: Settings
}

export default function Body(props: PageProps) {
  const { preview, loading, cards, settings } = props
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <Head settings={settings} />

      <main className="min-h-screen w-full h-100">
        <AlertBanner preview={preview} loading={loading} />
        <div className="container mx-auto">
          <Header />

          <Content />
        </div>
      </main>
    </>
  )
}
