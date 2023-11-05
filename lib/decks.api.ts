import { iThumb } from 'components/Thumb'
import * as demo from 'lib/demo.data'

export function findDeck(decks: Array<iThumb>, slug: string): iThumb {
  return decks.find((deck) => deck.slug === slug)
}

export function findCardsByDeck(id: number): Array<iThumb> {
  return demo.mockCards.filter((card) => card.deck === id)
}
