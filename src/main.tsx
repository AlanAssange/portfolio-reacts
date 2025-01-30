import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { Provider } from './components/ui/provider.tsx';
import IntroLayer from './components/IntroLayer.tsx';
import PgIntroLayer from './components/PgIntroLayer.tsx';


const router = createBrowserRouter([
  { path: '/',
    element: <App/>
  },
  {path: '/portfolio',
   element: <IntroLayer/>
  },
  {path: '/playground',
   element: <PgIntroLayer/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
