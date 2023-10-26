import CardPage, { CardPageProps } from 'components/Card/CardPage'
import {
  type Card,
  cardAndMoreCardsQuery,
  Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewCardPage(props: CardPageProps) {
  const [{ card: cardPreview, moreCards }, loadingCard] = useLiveQuery<{
    card: Card
    moreCards: Card[]
  }>(
    { card: props.card, moreCards: props.moreCards },
    cardAndMoreCardsQuery,
    {
      slug: props.card.slug,
    },
  )
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <CardPage
      preview
      loading={loadingCard || loadingSettings}
      card={cardPreview}
      moreCards={moreCards}
      settings={settings}
    />
  )
}
