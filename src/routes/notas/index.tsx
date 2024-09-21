import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/notas/')({
  component: () => <div>Hello /notas/!</div>,
})
