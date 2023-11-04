import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

export default function Header() {
  const { data: session } = useSession()
  const router = useRouter()

  const userSignOut = () => {
    signOut()
    router.push('/login')
  }

  return (
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
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/decks" className="mr-5  hover:underline">
            Decks
          </Link>
          <Link href="/about" className="mr-5 hover:underline">
            About
          </Link>
          <Link href="/users" className="mr-5 hover:underline">
            {session && session.user.name}
          </Link>
        </nav>
        <button
          onClick={() => userSignOut()}
          className={`inline-flex 
                      items-center 
                      border-0 
                      py-1 
                      px-3 
                      focus:outline-none  
                      rounded 
                      text-base 
                      mt-4 
                      md:mt-0`}
        >
          Logout
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
