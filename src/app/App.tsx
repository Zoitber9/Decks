import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from '../app/GlobalError/GlobalError.tsx'

export const App = () => {
  return (
    <div>
      <Decks />
      <GlobalError />
    </div>
  )
}
