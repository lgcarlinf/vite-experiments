import { createFileRoute, redirect } from '@tanstack/react-router'
import { Notes } from '../../pages/Notes';

export const Route = createFileRoute('/notes/')({
  component:  Notes,
  beforeLoad: (ctx) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { auth } = ctx.context
    const activeAccount = auth.getActiveAccount()

    if(!activeAccount)
      throw redirect({
        to: '/login',
    })
  }
})
