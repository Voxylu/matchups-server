import { MutationResolvers } from '../../../generated/graphqlgen'
import { signin, signup } from './auth'
import { addProfile, deleteProfile, editProfile } from './profile'
import { createTeam, editTeam, joinTeam, leaveTeam, deleteTeam } from './team'

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  signin,
  signup,
  addProfile,
  deleteProfile,
  editProfile,
  createTeam,
  editTeam,
  joinTeam,
  leaveTeam,
  deleteTeam,
}
