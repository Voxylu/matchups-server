// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { QueryResolvers } from '../../generated/graphqlgen'
import { getUserId } from '../utils'

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  me: async (parent, args, ctx) => {
    const userId = await getUserId(ctx)

    return ctx.prisma.utilisateur({ id: userId })
  },
  profile: async (parent, args, ctx) => {
    const userId = await getUserId(ctx)

    const userProfiles = await ctx.prisma
      .utilisateur({ id: userId })
      .profiles({ where: { id: args.id } })
    console.log(userProfiles)
    if (userProfiles.length !== 1) {
      throw new Error('No profile found.')
    }

    return ctx.prisma.profile({ id: args.id })
  },
  profiles: (parent, args, ctx) => {
    return ctx.prisma
      .game({ name: args.gameName })
      .players({ where: { NOT: { team: {} } } })
  },
  games: (parent, args, ctx) => {
    return ctx.prisma.games()
  },
  roles: async (parent, args, ctx) => {
    if (!(await ctx.prisma.$exists.game({ name: args.gameName }))) {
      throw new Error(`Game ${args.gameName} doesn't exist.`)
    }

    return ctx.prisma.game({ name: args.gameName }).roles()
  },
  teams: async (parent, args, ctx) => {
    const role = await ctx.prisma.role({ id: args.freeRoleID })
    if (!role) {
      throw new Error(`No profile found.`)
    }

    return ctx.prisma.teams({
      where: { wantedRoles_some: { id: args.freeRoleID } },
      skip: args.skip,
    })
  },
}
