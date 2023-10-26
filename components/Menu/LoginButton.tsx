import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <span className="block italic">Signed in as {session.user.name}</span>
        <button className=' text-teal-600 hover:underline' onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <span className="block italic">Not signed in</span>
      <button className='text-teal-600 hover:underline' onClick={() => signIn()}>Sign in</button>
    </>
  )
}
