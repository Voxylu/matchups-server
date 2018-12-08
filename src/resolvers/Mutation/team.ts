import { MutationResolvers } from '../../../generated/graphqlgen'
import { getUserId, verifyNameAndDescription } from '../../utils'
import { TeamUpdateInput } from '../../../generated/prisma-client'

export const createTeam: MutationResolvers.CreateTeamResolver = async (
  parent,
  args,
  ctx
) => {
  const id = await getUserId(ctx)

  const profiles = await ctx.prisma
    .utilisateur({ id })
    .profiles({ where: { id: args.profileId } })

  if (profiles.length !== 1) {
    throw new Error('No profile found.')
  }

  const profile = profiles[0]

  const hasTeam = await ctx.prisma.profile({ id: profile.id }).team()

  if (hasTeam) {
    throw new Error('Already have a team.')
  }

  let roles = []

  for (const role of args.roles) {
    if (!(await ctx.prisma.$exists.role({ id: role }))) {
      throw new Error('No profile found.')
    }
    roles.push({ id: role })
  }

  if (await ctx.prisma.$exists.team({ name: args.name })) {
    throw new Error('A team already have this name.')
  }
  verifyNameAndDescription(args.name, args.description)

  await ctx.prisma.updateProfile({
    where: { id: profile.id },
    data: {
      team: {
        create: {
          name: args.name,
          description: args.description,
          ownerID: profile.id,
          wantedRoles: { connect: roles },
        },
      },
    },
  })

  return ctx.prisma.profile({ id: profile.id }).team()
}
export const editTeam: MutationResolvers.EditTeamResolver = async (
  parent,
  args,
  ctx
) => {
  const id = await getUserId(ctx)

  const profiles = await ctx.prisma
    .utilisateur({ id })
    .profiles({ where: { id: args.profileId } })

  if (profiles.length !== 1) {
    throw new Error('No profile found.')
  }

  const team = await ctx.prisma.profile({ id: args.profileId }).team()

  if (team.ownerID !== args.profileId) {
    throw new Error('Not the owner of the team.')
  }

  if (!args.description && !args.kickId && !args.name) {
    throw new Error('No arguments provided')
  }

  if (await ctx.prisma.$exists.team({ name: args.name })) {
    throw new Error('A team already have this name.')
  }
  verifyNameAndDescription(args.name, args.description)

  let data: TeamUpdateInput = {
    name: args.name ? args.name : team.name,
    description: args.description ? args.description : team.description,
  }

  if (args.kickId) {
    const players = await ctx.prisma
      .profile({ id: args.profileId })
      .team()
      .players()
    const kickEdProfile = await ctx.prisma.profile({ id: args.kickId })

    if (!players.some((player) => player.id === args.kickId)) {
      throw new Error('Player not in the team.')
    } else if (!kickEdProfile) {
      throw new Error('Invalid player to kick.')
    } else if (kickEdProfile.id === args.profileId) {
      throw new Error("Can't kick yourself.")
    }

    data.players = {
      disconnect: {
        id: args.kickId,
      },
    }
  }

  return await ctx.prisma.updateTeam({ where: { id: team.id }, data })
}

export const joinTeam: MutationResolvers.JoinTeamResolver = async (
  parent,
  args,
  ctx
) => {
  const id = await getUserId(ctx)

  const profiles = await ctx.prisma
    .utilisateur({ id })
    .profiles({ where: { id: args.profileId } })

  if (profiles.length !== 1) {
    throw new Error('No profile found.')
  }

  const profile = profiles[0]

  const hasTeam = await ctx.prisma.profile({ id: profile.id }).team()

  if (hasTeam) {
    throw new Error('Already have a team.')
  }

  const teamExist = await ctx.prisma.$exists.team({ name: args.name })

  if (!teamExist) {
    throw new Error(`Team ${args.name} doesn't exist.`)
  }

  await ctx.prisma.updateProfile({
    where: { id: profile.id },
    data: { team: { connect: { name: args.name } } },
  })

  return ctx.prisma.team({ name: args.name })
}

export const leaveTeam: MutationResolvers.LeaveTeamResolver = async (
  parent,
  args,
  ctx
) => {
  const id = await getUserId(ctx)

  const profiles = await ctx.prisma
    .utilisateur({ id })
    .profiles({ where: { id: args.profileId } })

  if (profiles.length !== 1) {
    throw new Error('No profile found.')
  }

  const profile = profiles[0]

  const team = await ctx.prisma.profile({ id: profile.id }).team()

  if (!team) {
    throw new Error("Don't have a team.")
  } else if (team.ownerID === args.profileId) {
    throw new Error(
      "You can't leave your team if you are the owner of the team."
    )
  }

  await ctx.prisma.updateProfile({
    where: { id: args.profileId },
    data: { team: { disconnect: true } },
  })

  return team
}

export const deleteTeam: MutationResolvers.DeleteTeamResolver = async (
  parent,
  args,
  ctx
) => {
  const id = await getUserId(ctx)

  const profiles = await ctx.prisma
    .utilisateur({ id })
    .profiles({ where: { id: args.profileId } })

  if (profiles.length !== 1) {
    throw new Error('No profile found.')
  }

  const profile = profiles[0]

  const team = await ctx.prisma.profile({ id: profile.id }).team()

  if (!team) {
    throw new Error("Don't have a team.")
  } else if (team.ownerID !== args.profileId) {
    throw new Error("You don't have the permission.")
  }

  return ctx.prisma.deleteTeam({ id: team.id })
}
