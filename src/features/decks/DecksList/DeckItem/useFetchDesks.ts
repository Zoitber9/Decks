import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store.ts'
import { fetchDecksTC } from '../../decks-thunks.ts'

export const useFetchDesks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(state => state.decks.decks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return {
    decks,
  }
}
