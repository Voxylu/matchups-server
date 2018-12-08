// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { ProfileResolvers } from '../../generated/graphqlgen'

export const Profile: ProfileResolvers.Type = {
  ...ProfileResolvers.defaultResolvers,

  game: (parent, args, ctx) => {
    return ctx.prisma.profile({ id: parent.id }).game()
  },
  team: (parent, args, ctx) => {
    return ctx.prisma.profile({ id: parent.id }).team()
  },
  role: (parent, args, ctx) => {
    return ctx.prisma.profile({ id: parent.id }).role()
  },
}
