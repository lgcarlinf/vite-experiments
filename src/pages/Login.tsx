import { useMsal } from '@azure/msal-react'
import { useCallback } from 'react'

export const Login = () => {

    const { instance } = useMsal()

    const handleClick = useCallback(() => {
      instance.loginRedirect()
    }, [ instance ])

  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleClick}>Ingresar</button>
    </div>
  )
}
