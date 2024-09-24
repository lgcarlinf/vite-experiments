import { RouterProvider } from '@tanstack/react-router'
import './App.css'
import { router } from './router'
import { useMsal } from '@azure/msal-react';

function App() {

  const { inProgress, instance } = useMsal();

    const isMSALAvailable = inProgress === "none" || inProgress === 'ssoSilent'

  return (
    <>
        {(isMSALAvailable)  ? (
            <RouterProvider router={router} context={{ auth: instance }} />
          ): <div>Cargando ...</div>}
    </>
  )
}

export default App
