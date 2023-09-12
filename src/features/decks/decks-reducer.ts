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
    case 'ADD-DECK':
      return { ...state, decks: [action.deck, ...state.decks] }
    case 'DELETE-DECK' :
      return { ...state, decks: state.decks.filter((deck) => deck.id !== action.id) }
    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => ({ type: 'SET-DECKS' as const, decks })
export const addDeckAC = (deck: Deck) => ({ type: 'ADD-DECK' as const, deck })
export const deleteDeckAC = (id: string) => ({ type: 'DELETE-DECK' as const, id })

type setDecksACType = ReturnType<typeof setDecksAC>
type addDeckACType = ReturnType<typeof addDeckAC>
type deleteDeckACType = ReturnType<typeof deleteDeckAC>

type ActionType = setDecksACType | addDeckACType | deleteDeckACType




