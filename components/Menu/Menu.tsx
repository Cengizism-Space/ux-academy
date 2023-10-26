import Link from 'next/link'
import LoginButton from './LoginButton'

export default function Menu() {
  return (
    <>
      <ul>
        <li className="inline">
          <Link href="/">Home</Link>
        </li>
        <li className="inline ml-2">
          <Link href="/protected">Protected</Link>
        </li>
      </ul>
      <LoginButton />
    </>
  )
}
