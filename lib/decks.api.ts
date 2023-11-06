import { iThumb } from 'components/Thumb'
import * as demo from 'lib/demo.data'

export function fetchLatestCards(): Array<iThumb> {
  return demo.mockCards.slice(0, 3)
}

export function fetchLatestDecks(): Array<iThumb> {
  return demo.mockDecks.slice(0, 3)
}

export function findDeck(decks: Array<iThumb>, slug: string): iThumb {
  return decks.find((deck) => deck.slug === slug)
}

export function findCardsByDeck(id: number): Array<iThumb> {
  return demo.mockCards.filter((card) => card.deck === id)
}

export function findCard(cards: Array<iThumb>, slug: string): iThumb {
  return cards.find((card) => card.slug === slug)
}
