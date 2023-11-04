import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

export default function UserNavigation() {
  const { data: session } = useSession()
  const router = useRouter()

  const userSignOut = () => {
    signOut()
    router.push('/login')
  }

  return (
    <>
      <nav>
        <Link
          href={`/users/` + session?.user?.email}
          className="mr-5 hover:underline"
        >
          {session && session.user.name}
        </Link>
        <button
          onClick={() => userSignOut()}
          className={`inline-flex 
                  items-center 
                  border-0 
                  py-3 
                  px-3 
                  focus:outline-none
                  focus:underline"
                  rounded 
                  text-base 
                  mt-4 
                  md:mt-0`}
        >
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
      </nav>
    </>
  )
}
