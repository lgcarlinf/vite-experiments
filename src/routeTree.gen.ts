/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as NotesIndexImport } from './routes/notes/index'
import { Route as LoginIndexImport } from './routes/login/index'

// Create Virtual Routes

const NotesNuevaLazyImport = createFileRoute('/notes/nueva')()

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NotesIndexRoute = NotesIndexImport.update({
  path: '/notes/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const NotesNuevaLazyRoute = NotesNuevaLazyImport.update({
  path: '/notes/nueva',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/notes/nueva.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/notes/nueva': {
      id: '/notes/nueva'
      path: '/notes/nueva'
      fullPath: '/notes/nueva'
      preLoaderRoute: typeof NotesNuevaLazyImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/notes/': {
      id: '/notes/'
      path: '/notes'
      fullPath: '/notes'
      preLoaderRoute: typeof NotesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/notes/nueva': typeof NotesNuevaLazyRoute
  '/login': typeof LoginIndexRoute
  '/notes': typeof NotesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/notes/nueva': typeof NotesNuevaLazyRoute
  '/login': typeof LoginIndexRoute
  '/notes': typeof NotesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/notes/nueva': typeof NotesNuevaLazyRoute
  '/login/': typeof LoginIndexRoute
  '/notes/': typeof NotesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/notes/nueva' | '/login' | '/notes'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/notes/nueva' | '/login' | '/notes'
  id: '__root__' | '/' | '/notes/nueva' | '/login/' | '/notes/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  NotesNuevaLazyRoute: typeof NotesNuevaLazyRoute
  LoginIndexRoute: typeof LoginIndexRoute
  NotesIndexRoute: typeof NotesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  NotesNuevaLazyRoute: NotesNuevaLazyRoute,
  LoginIndexRoute: LoginIndexRoute,
  NotesIndexRoute: NotesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/notes/nueva",
        "/login/",
        "/notes/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/notes/nueva": {
      "filePath": "notes/nueva.lazy.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/notes/": {
      "filePath": "notes/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
