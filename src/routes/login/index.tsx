import { createFileRoute, redirect } from '@tanstack/react-router'
import { Login } from '../../pages/Login'

export const Route = createFileRoute('/login/')({
  component: Login,
  beforeLoad: (ctx) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { auth } = ctx.context
    const activeAccount = auth.getActiveAccount()

    if (activeAccount)
      throw redirect({
        to: '/notes',
      })
  },
})
