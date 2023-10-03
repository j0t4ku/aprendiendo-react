import { Toaster } from 'sonner'
import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUsers'


function App() {

  return (
    <>
      <h1>Nuestro Projecto con Redux</h1>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </>
  )
}

export default App
