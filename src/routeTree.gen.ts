/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as NotesNoteIdImport } from './routes/notes.$noteId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NotesNoteIdRoute = NotesNoteIdImport.update({
  id: '/notes/$noteId',
  path: '/notes/$noteId',
  getParentRoute: () => rootRoute,
} as any)

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
    '/notes/$noteId': {
      id: '/notes/$noteId'
      path: '/notes/$noteId'
      fullPath: '/notes/$noteId'
      preLoaderRoute: typeof NotesNoteIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/notes/$noteId': typeof NotesNoteIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/notes/$noteId': typeof NotesNoteIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/notes/$noteId': typeof NotesNoteIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/notes/$noteId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/notes/$noteId'
  id: '__root__' | '/' | '/notes/$noteId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  NotesNoteIdRoute: typeof NotesNoteIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  NotesNoteIdRoute: NotesNoteIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/notes/$noteId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/notes/$noteId": {
      "filePath": "notes.$noteId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
