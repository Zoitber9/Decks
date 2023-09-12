import { decksAPI } from '../decks/decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'
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