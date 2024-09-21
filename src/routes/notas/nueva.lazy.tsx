import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/notas/nueva')({
  component: () => <div>Hello /notas/nueva!</div>,
})
