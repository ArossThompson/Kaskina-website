import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/RootLayout/RootLayout';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { About } from './pages/about/About';
import { Facials } from './pages/facials/Facials';
import { Home } from './pages/Home';
import { Lazer } from './pages/Lazer';
import './App.css'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
        {path: 'facials', element: <Facials />},
        {path: 'lazer-hair-removal', element: <Lazer />}
      ]
    }
  ])

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
