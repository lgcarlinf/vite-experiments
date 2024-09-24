import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/notes/nueva')({
  component: () => <div>Hello /notas/nueva!</div>,
})
