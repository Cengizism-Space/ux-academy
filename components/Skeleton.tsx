import { toPlainText } from '@portabletext/react'
import * as demo from 'lib/demo.data'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import Footer from './Footer'
import Navigation from './Navigation'
import Search from './Search'
import ThemeSwitcher from './ThemeSwitcher'
import UserNavigation from './UserNavigation'

export default function Skeleton({ children }) {
  return (
    <>
      <ThemeSwitcher />

      <Head>
        <title>{demo.title}</title>

        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />

        <meta
          key="description"
          name="description"
          content={toPlainText(demo.description)}
        />
      </Head>

      <main className="min-h-screen w-full h-100">
        <div className="container mx-auto">
          <header className="body-font border-b border-gray-600">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <Link
                className={`flex
                      title-font 
                      font-medium 
                      items-center 
                      mb-4 
                      md:mb-0`}
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">Alten Decks</span>
              </Link>
              <Navigation />
              <Search />
              <UserNavigation />
            </div>
          </header>
          {children}
        </div>
      </main>

      <Footer />
    </>
  )
}
