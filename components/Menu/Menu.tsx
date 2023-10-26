import Link from 'next/link'

export default function Menu() {
  return (
    <ul>
      <li className='inline'>
        <Link href="/">Home</Link>
      </li>
      <li className='inline ml-2'>
        <Link href="/protected">Protected</Link>
      </li>
    </ul>
  )
}
