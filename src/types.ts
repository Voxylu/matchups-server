import { ContextParameters } from 'graphql-yoga/dist/types'
import { Prisma } from '../generated/prisma-client'

export interface Context extends ContextParameters {
  prisma: Prisma
}

export interface User {
  id: string
  email: string
  // profiles: Profile[]
}

export interface AuthPayload {
  token: string
  user: User
}

// export interface Profile {
//   id: string
//   name: string
//   description: string
//   game: Game
//   team?: Team
// }

// export interface Game {
//   id: string
//   name: string
//   description: string
//   players: Profile[]
// }

// export interface Team {
//   id: string
//   name: string
//   description: string
//   owner: User
//   players: Profile[]
// }
