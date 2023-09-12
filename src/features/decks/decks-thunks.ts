import { UpdateDeckParams, decksAPI } from '../decks/decks-api.ts'
import { deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'
import { AppDispatch } from './../../app/store.ts'

/**
 * Функция для получения колод.
 * @returns Function Функция-экшен, принимающая объект диспетчера.
 */

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

/**
 * Функция для добавления колоды.
 * @param {string} name - Название колоды.
 * @returns  Function Функция-экшен, принимающая объект диспетчера.
 */

export const addDeckTC = (name: string) => (dispatch: AppDispatch) => {
  return decksAPI.addDeck(name).then(() => {
    dispatch(fetchDecksTC())
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  try {
    await decksAPI.deleteDeck(id)
    dispatch(deleteDeckAC(id))
  } catch (e) {
    console.log((e as any).message)
  }
}

export const updateDeckTC = (params: UpdateDeckParams) => (dispatch: Dispatch) => {
  return decksAPI.updateDeck(params).then((res) => {
    dispatch(updateDeckAC(res.data))
  })
}
