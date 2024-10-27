import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { Toaster } from 'react-hot-toast';
import './App.css'

function App() {
  
return (
    <>
    <RouterProvider router={router} />
    <Toaster/>
    </>
  )
}

export default App;
