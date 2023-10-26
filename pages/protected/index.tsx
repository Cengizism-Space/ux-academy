import Container from 'components/Library/LibraryContainer'
import LibraryHeader from 'components/Library/LibraryHeader'
import LibraryMeta from 'components/Library/LibraryMeta'
import Layout from 'components/Library/LibraryLayout'
import * as demo from 'lib/demo.data'
import type { Settings } from 'lib/sanity.queries'
import { useSession, getSession } from "next-auth/react"

import Head from 'next/head'

export interface ProtectedPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
}

export default function ProtectedPage(props: ProtectedPageProps) {
  const { preview, loading, settings } = props
  const { title = demo.title } = settings || {}

  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return (
      <>
        <Head>
          <title>Protected page</title>
          <LibraryMeta />
        </Head>
        <Layout preview={preview} loading={loading}>
          <Container>
            <LibraryHeader title={title} level={2} />
            <h1>Access denied</h1>
          </Container>
        </Layout>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Protected page</title>
        <LibraryMeta />
      </Head>
      <Layout preview={preview} loading={loading}>
        <Container>
          <LibraryHeader title={title} level={2} />
          <h1>Protected page</h1>
        </Container>
      </Layout>
    </>
  )
}
