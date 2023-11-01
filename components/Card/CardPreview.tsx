import Date from 'components/Card/CardDate'
import CoverImage from 'components/Card/CoverImage'
import Avatar from 'components/Card/SourceAvatar'
import type { Card } from 'lib/sanity.queries'
import Link from 'next/link'

export default function CardPreview({
  title,
  coverImage,
  date,
  summary,
  source,
  slug,
}: Omit<Card, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/cards/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      {summary && <p className="mb-4 text-lg leading-relaxed">{summary}</p>}
      {source && <Avatar name={source.name} picture={source.picture} />}
    </div>
  )
}
