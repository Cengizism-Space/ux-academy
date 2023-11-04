import Link from 'next/link'

export default function Navigation() {
  return (
    <>
      <nav className="mr-auto pl-8 flex flex-wrap items-center text-base justify-center">
        <Link href="/" className="mr-5 hover:underline">
          Home
        </Link>
        <Link href="/decks" className="mr-5  hover:underline">
          Decks
        </Link>
      </nav>
    </>
  )
}
