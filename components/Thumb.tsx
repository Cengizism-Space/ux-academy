import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

import Bookmark from './Bookmark'

export interface iThumb {
  _type: string
  id: number
  parent?: string
  title: string
  slug: string
  image: string
  description: string
  totals?: number
  footnote?: string
}

interface PageProps {
  thumb: iThumb
}

// src={urlForImage(image).height(100).width(200).url()}

export default function Thumb(props: PageProps) {
  const { _type, slug, parent, title, image, description, totals, footnote } =
    props.thumb

  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <Link href={(_type === 'deck' ? '/deck/' : '/card/') + slug}>
        <div
          className={`h-full 
                      flex 
                      items-center 
                      border-gray-500 
                      hover:border-indigo-500 
                      hover:bg-gray-100
                      border 
                      p-4 
                      rounded-lg`}
        >
          <div className="flex-grow relative">
            {_type === 'card' && <Bookmark />}
            {parent && <span className="block text-gray-500">{parent}</span>}
            <span className="block text-3xl title-font font-medium text-gray-500">
              {title}
            </span>
            <Image
              className="h-auto w-full my-8"
              width={200}
              height={100}
              alt={title}
              src={`/images/` + image}
              sizes="100vw"
            />
            <span className="block text-gray-500 text-xl my-4">
              {description}
            </span>
            {footnote && (
              <span className="body-font italic text-gray-500 text-sm">
                {totals} {footnote}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
