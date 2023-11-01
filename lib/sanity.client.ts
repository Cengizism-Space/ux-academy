import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  type Card,
  cardAndMoreCardsQuery,
  cardBySlugQuery,
  cardSlugsQuery,
  indexQuery,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {}
}

export async function getAllCards(client: SanityClient): Promise<Card[]> {
  return (await client.fetch(indexQuery)) || []
}

export async function getAllCardsSlugs(): Promise<Pick<Card, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(cardSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getCardBySlug(
  client: SanityClient,
  slug: string,
): Promise<Card> {
  return (await client.fetch(cardBySlugQuery, { slug })) || ({} as any)
}

export async function getCardAndMoreCards(
  client: SanityClient,
  slug: string,
): Promise<{ card: Card; moreCards: Card[] }> {
  return await client.fetch(cardAndMoreCardsQuery, { slug })
}
