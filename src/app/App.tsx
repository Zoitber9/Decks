import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from '../app/GlobalError/GlobalError.tsx'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { useAppSelector } from '../app/store.ts'
import {  selectAppStatus } from '../app/app-selectors.ts'

export const App = () => {
  const appStatus = useAppSelector(selectAppStatus)

  return (
    <div>
      {appStatus === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
