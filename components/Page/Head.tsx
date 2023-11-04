import { toPlainText } from '@portabletext/react'
import PageMeta from 'components/Page/Meta'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import Head from 'next/head'

interface PageHeadProps {
  settings: Settings
}

export default function PageHead({ settings }: PageHeadProps) {
  const { title = demo.title, description = demo.description } = settings

  return (
    <Head>
      <title>{title}</title>

      <PageMeta />

      <meta
        key="description"
        name="description"
        content={toPlainText(description)}
      />
    </Head>
  )
}
