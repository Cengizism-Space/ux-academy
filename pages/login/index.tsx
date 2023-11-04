'use client'
// import type { Card, Settings } from 'lib/sanity.queries'
import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react'
import Head from 'components/Page/Head'
import ThemeSwitcher from 'components/ThemeSwitcher'
import * as demo from 'lib/demo.data'
import { BuiltInProviderType } from 'next-auth/providers'
import { getProviders, signIn } from 'next-auth/react'
import { ClientSafeProvider, LiteralUnion } from 'next-auth/react'
import React from 'react'

export default function LoginPage({
  providers,
}: Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider>) {
  const settings = {
    title: demo.title,
    description: demo.description,
  }
  // const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <ThemeSwitcher />
      <Head settings={settings} />

      <main className="min-h-screen w-full h-100">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">
              {settings.title}
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                {Object.values(providers).map((provider) => (
                  <p key={provider.name}>
                    <a
                      href={provider.signinUrl}
                      onClick={(e) => e.preventDefault()}
                    >
                      <button
                        onClick={() =>
                          signIn(provider.id, {
                            callbackUrl: '',
                          })
                        }
                        className={`flex 
                                        w-full 
                                        justify-center 
                                        rounded-md 
                                        bg-indigo-600 
                                        px-3 
                                        py-5 
                                        font-semibold 
                                        leading-6 
                                        text-white 
                                        shadow-sm 
                                        hover:bg-indigo-500 
                                        focus-visible:outline 
                                        focus-visible:outline-2 
                                        focus-visible:outline-offset-2 
                                        focus-visible:outline-indigo-600`}
                      >
                        Sign in with {provider.name}
                      </button>
                    </a>
                  </p>
                ))}
              </div>
            </form>

            <div className="mt-10 text-center text-sm">
              <PortableText value={settings.description} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  }
}
