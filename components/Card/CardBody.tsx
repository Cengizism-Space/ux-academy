import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react'

import styles from './CardBody.module.css'
import { SanityImage } from './SanityImage'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
}

export default function CardBody({ content }) {
  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
