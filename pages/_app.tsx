import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { lazy } from 'react'

export interface SharedPageProps {
  session?: any
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('components/Preview/PreviewProvider'))

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      <SessionProvider session={session}>
        {draftMode ? (
          <PreviewProvider token={token}>
            <Component {...pageProps} />
          </PreviewProvider>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </>
  )
}
