import { toPlainText } from '@portabletext/react'
import LibraryMeta from 'components/Library/LibraryMeta'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import Head from 'next/head'

export interface IndexPageHeadProps {
  settings: Settings
}

export default function IndexPageHead({ settings }: IndexPageHeadProps) {
  const {
    title = demo.title,
    description = demo.description,
    ogImage = {},
  } = settings
  const ogImageTitle = ogImage?.title || demo.ogImageTitle

  return (
    <Head>
      <title>{title}</title>
      <LibraryMeta />
      <meta
        key="description"
        name="description"
        content={toPlainText(description)}
      />
    </Head>
  )
}
