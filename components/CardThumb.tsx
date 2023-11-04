import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from 'lib/sanity.image'

interface PageProps {
  deck: {
    id: number
    parent: string
    title: string
    image: string
    description: string
    footnote: {
      total: number
      note: string
    }
  }
}

export default function CardThumb(props: PageProps) {
  const { id, parent, title, image, description, footnote } = props.deck

  return (
    <div key={id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <Link href={'/'}>
        <div className="h-full flex items-center border-gray-500 hover:border-indigo-500 border p-4 rounded-lg">
          <div className="flex-grow">
            <span className="block text-gray-500">{parent}</span>
            <span className="block text-3xl title-font font-medium">
              {title}
            </span>
            <Image
              className="h-auto w-full my-8"
              width={200}
              height={100}
              alt={title}
              src={urlForImage(props.deck.image).height(100).width(200).url()}
              sizes="100vw"
              priority={true}
            />
            <span className="block text-gray-500 text-xl my-4">
              {description}
            </span>
            <span className="body-font italic text-gray-500 text-sm">
              {footnote.total} {footnote.note}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
