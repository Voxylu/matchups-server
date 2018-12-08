import { MutationResolvers } from '../../../generated/graphqlgen'
import { getUserId, verifyNameAndDescription } from '../../utils'
import { ProfileUpdateInput } from '../../../generated/prisma-client'

export const addProfile: MutationResolvers.AddProfileResolver = async (
  parent,
  args,
  ctx,
  info
) => {
  const id = await getUserId(ctx)

  verifyNameAndDescription(args.name, args.description)

  if (!(await ctx.prisma.$exists.game({ name: args.gameName }))) {
    throw new Error(`No game found for name ${args.gameName}.`)
  } else if (!(await ctx.prisma.$exists.role({ id: args.roleID }))) {
    throw new Error(`No role found.`)
  }

  const usersProfiles = await ctx.prisma
    .utilisateur({ id })
    .profiles({ where: { name: args.name } })
  if (usersProfiles.length !== 0) {
    throw new Error('A profile with that name already exist.')
  }

  const p = await ctx.prisma
    .updateUtilisateur({
      where: { id },
      data: {
        profiles: {
          create: {
            description: args.description,
            name: args.name,
            game: {
              connect: { name: args.gameName },
            },
            role: {
              connect: { id: args.roleID },
            },
          },
        },
      },
    })
    .profiles({ where: { name: args.name } })

  return p[0]
}

export const editProfile: MutationResolvers.EditProfileResolver = async (
  parent,
  args,
  ctx
) => {
  const id = await getUserId(ctx)

  if (!args.description && !args.name && !args.roleID) {
    throw new Error('No name, description or role provided.')
  }
  verifyNameAndDescription(args.name, args.description)

  const profile = await ctx.prisma
    .utilisateur({ id })
    .profiles({ where: { id: args.profileId } })

  if (profile.length !== 1) {
    throw new Error('No profile found.')
  }

  if (args.name && profile[0].name !== args.name) {
    const profiles = await ctx.prisma
      .utilisateur({ id })
      .profiles({ where: { name: args.name } })
    if (profiles.length !== 0) {
      throw new Error('A profile with that name already exist.')
    }
  }

  let data: ProfileUpdateInput = {
    name: args.name ? args.name : profile[0].name,
    description: args.description ? args.description : profile[0].description,
  }

  if (args.roleID) {
    const role = await ctx.prisma.role({ id: args.roleID })

    if (!role) {
      throw new Error(`No role found.`)
    }

    data.role = {
      connect: { id: args.roleID },
    }
  }

  return ctx.prisma.updateProfile({
    where: { id: args.profileId },
    data,
  })
}

export const deleteProfile: MutationResolvers.DeleteProfileResolver = async (
  parent,
  args,
  ctx
) => {
  const id = await getUserId(ctx)

  const profile = await ctx.prisma
    .utilisateur({ id })
    .profiles({ where: { id: args.profileId } })

  if (profile.length !== 1) {
    throw new Error('No profile found.')
  }

  return ctx.prisma.deleteProfile({ id: args.profileId })
}
