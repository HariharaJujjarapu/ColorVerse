import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from './RootLayout';
import Random from './Components/Random/Random'

function App() {

  let router = createBrowserRouter([
    {
      path: '',
      element: <RootLayout/>,
      children: [
        {
          path: 'random',
          element: <Random />
        },
      ]
    }
  ])

  return ( <RouterProvider router = {router}/> );
}

export default App;
