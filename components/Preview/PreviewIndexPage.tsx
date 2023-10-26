import IndexPage, { type IndexPageProps } from 'components/Library/IndexPage'
import {
  indexQuery,
  type Card,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewIndexPage(props: IndexPageProps) {
  const [cards, loadingCards] = useLiveQuery<Card[]>(props.cards, indexQuery)
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <IndexPage
      preview
      loading={loadingCards || loadingSettings}
      cards={cards || []}
      settings={settings || {}}
    />
  )
}
