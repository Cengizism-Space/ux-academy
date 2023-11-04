// TODO WORK in progress
import { useRouter } from 'next/router'
import {
  // getSession,
  useSession,
} from 'next-auth/react'

export function CheckSession() {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'unauthenticated') {
    router.push('/login')
  }
}
