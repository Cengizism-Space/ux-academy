import LibraryMeta from 'components/Library/LibraryMeta'
import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { Card, Settings } from 'lib/sanity.queries'
import Head from 'next/head'

export interface CardPageHeadProps {
  settings: Settings
  card: Card
}

export default function CardPageHead({ settings, card }: CardPageHeadProps) {
  const title = settings.title ?? demo.title
  return (
    <Head>
      <title>{card.title ? `${card.title} | ${title}` : title}</title>
      <LibraryMeta />
      {card.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(card.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </Head>
  )
}
