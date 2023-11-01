'use client'
import { getProviders, signIn } from 'next-auth/react'
import React from 'react'

export default function LoginPage({ providers }) {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Alten Deks
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

            <div></div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Alten Decks is a company-scoped online community training
            applicaiton.
          </p>
        </div>
      </div>
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
