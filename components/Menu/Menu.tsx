import Link from 'next/link'
import LoginButton from './LoginButton'

export default function Menu() {
  return (
    <>
      <ul>
        <li className="inline">
          <Link className='text-teal-600 hover:underline' href="/">Home</Link>
        </li>
        <li className="inline ml-2">
          <Link className='text-teal-600 hover:underline' href="/protected">Protected</Link>
        </li>
      </ul>
      <LoginButton />
    </>
  )
}
