// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { GameResolvers } from '../../generated/graphqlgen'

export const Game: GameResolvers.Type = {
  ...GameResolvers.defaultResolvers,
  players: (parent, args, ctx) => {
    return ctx.prisma.profiles({ where: { game: { id: parent.id } } })
  },
  roles: (parent, args, ctx) => {
    return ctx.prisma.roles({ where: { game: { id: parent.id } } })
  },
}
