import { iThumb } from 'components/Thumb'
import * as demo from 'lib/demo.data'

function shuffle(array:Array<iThumb>): Array<iThumb> {
  let currentIndex = array.length, randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function fetchLatestCards(): Array<iThumb> {
  return shuffle(demo.mockCards).slice(0, 3)
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
