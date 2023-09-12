import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: ActionType): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.decks }
    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => ({ type: 'SET-DECKS', decks } as const)
type setDecksACType = ReturnType<typeof setDecksAC>

type ActionType = setDecksACType




