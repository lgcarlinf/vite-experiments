import { IPublicClientApplication } from '@azure/msal-browser'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

export interface CustomRouterContext {
    auth: IPublicClientApplication
  }

  export const Route = createRootRouteWithContext<CustomRouterContext>()({
    component: () => (
      <>
        <Outlet />
      </>
    ),
  })
  