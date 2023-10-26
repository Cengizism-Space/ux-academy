import SourceAvatar from 'components/Card/SourceAvatar'
import CoverImage from 'components/Card/CoverImage'
import Date from 'components/Card/CardDate'
import type { Card } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroCard(
  props: Pick<
    Card,
    'title' | 'coverImage' | 'date' | 'summary' | 'source' | 'slug'
  >,
) {
  const { title, coverImage, date, summary, source, slug } = props
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/cards/${slug}`} className="hover:underline">
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          {summary && <p className="mb-4 text-lg leading-relaxed">{summary}</p>}
          {source && (
            <SourceAvatar name={source.name} picture={source.picture} />
          )}
        </div>
      </div>
    </section>
  )
}
