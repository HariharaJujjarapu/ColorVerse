import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from './RootLayout';
import Random from './Components/Random/Random'
import Palette from './Components/Palette/Palette';

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
        {
          path: 'palette',
          element: <Palette />
        }
      ]
    }
  ])

  return ( <RouterProvider router = {router}/> );
}

export default App;
