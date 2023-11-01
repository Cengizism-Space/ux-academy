import { PortableText } from '@portabletext/react'
import Menu from 'components/Menu/Menu'
import Link from 'next/link'

import styles from './LibraryHeader.module.css'

export default function LibraryHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <div className="md:pr-8">
            <h2 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl">
              {title}
            </h2>
            <h4
              className={`mt-1 text-center text-lg md:text-left ${styles.portableText}`}
            >
              <PortableText value={description} />
            </h4>
          </div>
          <div className="md:pl-8">
            <Menu />
          </div>
        </header>
      )

    case 2:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <div className="md:pr-8">
            <h2 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl">
              <Link href="/" className="hover:underline">
                {title}
              </Link>
            </h2>
            <h4
              className={`mt-1 text-center text-lg md:text-left ${styles.portableText}`}
            >
              <PortableText value={description} />
            </h4>
          </div>
          <div className="md:pl-8">
            <Menu />
          </div>
        </header>
        // <header>
        //   <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        //     <Link href="/" className="hover:underline">
        //       {title}
        //     </Link>
        //   </h2>
        // </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
