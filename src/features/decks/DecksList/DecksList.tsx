import s from './DecksList.module.css'

import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDesks } from '../DecksList/DeckItem/useFetchDesks.ts'


export const DecksList = () => {
  const { decks } = useFetchDesks()
  return <ul className={s.list}>
    {decks.map(deck => <DeckItem key={deck.id} deck={deck} />)}
  </ul>
}
