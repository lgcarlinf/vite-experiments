import { createFileRoute, Navigate, redirect } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: () => {
    return <Navigate to="/notes" />
  },
  beforeLoad(ctx) {
    const { auth } = ctx.context

    const activeAccount = auth.getActiveAccount()

    if (!activeAccount) {
      throw redirect({
        to: '/login'
      })
    }

    throw redirect({
      to: '/notes'
    })
  },
})
