import { RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import routes from './Routes/Routes/Routes'

function App() {

  return (
    <>
      <RouterProvider
        const router={routes}
      >
      </RouterProvider>

    </>
  )
}

export default App
