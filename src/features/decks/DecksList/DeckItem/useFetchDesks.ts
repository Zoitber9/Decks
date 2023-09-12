import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store.ts'
import { fetchDecksTC } from '../../decks-thunks.ts'
import { selectDecks } from '../../decks-selectors.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return {
    decks,
  }
}
