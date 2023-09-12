import { decksAPI } from '../decks/decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksTC =  () => {
  return async (dispatch: Dispatch) => {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
  }
}