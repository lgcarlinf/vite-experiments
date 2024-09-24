import { useMsal } from '@azure/msal-react'
import { useCallback } from 'react'

export const Notes = () => {

    const { instance } = useMsal()

    const handleClick = useCallback(() => {
      instance.logout()
    }, [ instance ])

  return (
    <div>
        <h1>Notes</h1>
        <button onClick={handleClick}>log out</button>
    </div>
  )
}
