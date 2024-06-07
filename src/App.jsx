
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainSection from './components/MainSection'
import { TasksProvider } from './context/TasksContext'
import Home from './components/Pages/Home'
import Compras from './components/Pages/Compras'
import Pessoal from './components/Pages/Pessoal'
import Saude from './components/Pages/Saude'

//bg-images
import comprasImg from './assets/compras.jpg'
import pessoalImg from './assets/pessoal.png'
import saudeImg from './assets/saude.jpeg'
import homeImg from './assets/home.jpg'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainSection />,
      children: [
        {
          path: '',
          element: <Home img={homeImg} />,
        },
        {
          path: 'pessoal',
          element: <Pessoal img={pessoalImg}/>
        },
        {
          path: 'compras',
          element: <Compras img={comprasImg}/>
        },
        {
          path: 'saude',
          element: <Saude img={saudeImg} />
        }

      ]
    }
  ] )

return (

  <div className='main'>
    <TasksProvider>
      <RouterProvider router={router} />
    </TasksProvider>
  </div>
)
}

export default App
