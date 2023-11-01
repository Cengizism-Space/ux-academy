'use client'
import { getProviders, signIn } from 'next-auth/react'
import React from 'react'

export default function LoginPage({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <p key={provider.name}>
          <a href={provider.signinUrl} onClick={(e) => e.preventDefault()}>
            <button
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: '',
                })
              }
            >
              Sign in with {provider.name}
            </button>
          </a>
        </p>
      ))}
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
