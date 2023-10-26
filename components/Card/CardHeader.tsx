import Avatar from 'components/Card/SourceAvatar'
import CoverImage from 'components/Card/CoverImage'
import Date from 'components/Card/CardDate'
import CardTitle from 'components/Card/CardTitle'
import type { Card } from 'lib/sanity.queries'

export default function CardHeader(
  props: Pick<Card, 'title' | 'coverImage' | 'date' | 'source' | 'slug'>,
) {
  const { title, coverImage, date, source, slug } = props
  return (
    <>
      <CardTitle>{title}</CardTitle>
      <div className="hidden md:mb-12 md:block">
        {source && <Avatar name={source.name} picture={source.picture} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {source && <Avatar name={source.name} picture={source.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
