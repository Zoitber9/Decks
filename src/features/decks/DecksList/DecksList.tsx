import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from './../decks-api.ts'
import { setDecksAC } from './../decks-reducer.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(state => state.decks.decks)

  useEffect(() => {
    decksAPI.fetchDecks().then(res => {
      dispatch(setDecksAC(res.data.items))

    })
  }, [])

  return <ul className={s.list}>
    {decks.map(deck => <DeckItem key={deck.id} deck={deck} />)}
  </ul>
}
