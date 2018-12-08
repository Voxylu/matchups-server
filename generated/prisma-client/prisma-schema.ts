export const typeDefs = /* GraphQL */ `type AggregateGame {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateUtilisateur {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Game {
  id: ID!
  name: String!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
  description: String!
  players(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile!]
}

type GameConnection {
  pageInfo: PageInfo!
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  name: String!
  roles: RoleCreateManyWithoutGameInput
  description: String!
  players: ProfileCreateManyWithoutGameInput
}

input GameCreateOneWithoutPlayersInput {
  create: GameCreateWithoutPlayersInput
  connect: GameWhereUniqueInput
}

input GameCreateOneWithoutRolesInput {
  create: GameCreateWithoutRolesInput
  connect: GameWhereUniqueInput
}

input GameCreateWithoutPlayersInput {
  name: String!
  roles: RoleCreateManyWithoutGameInput
  description: String!
}

input GameCreateWithoutRolesInput {
  name: String!
  description: String!
  players: ProfileCreateManyWithoutGameInput
}

type GameEdge {
  node: Game!
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GamePreviousValues {
  id: ID!
  name: String!
  description: String!
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameWhereInput
  AND: [GameSubscriptionWhereInput!]
  OR: [GameSubscriptionWhereInput!]
  NOT: [GameSubscriptionWhereInput!]
}

input GameUpdateInput {
  name: String
  roles: RoleUpdateManyWithoutGameInput
  description: String
  players: ProfileUpdateManyWithoutGameInput
}

input GameUpdateManyMutationInput {
  name: String
  description: String
}

input GameUpdateOneRequiredWithoutPlayersInput {
  create: GameCreateWithoutPlayersInput
  update: GameUpdateWithoutPlayersDataInput
  upsert: GameUpsertWithoutPlayersInput
  connect: GameWhereUniqueInput
}

input GameUpdateOneRequiredWithoutRolesInput {
  create: GameCreateWithoutRolesInput
  update: GameUpdateWithoutRolesDataInput
  upsert: GameUpsertWithoutRolesInput
  connect: GameWhereUniqueInput
}

input GameUpdateWithoutPlayersDataInput {
  name: String
  roles: RoleUpdateManyWithoutGameInput
  description: String
}

input GameUpdateWithoutRolesDataInput {
  name: String
  description: String
  players: ProfileUpdateManyWithoutGameInput
}

input GameUpsertWithoutPlayersInput {
  update: GameUpdateWithoutPlayersDataInput!
  create: GameCreateWithoutPlayersInput!
}

input GameUpsertWithoutRolesInput {
  update: GameUpdateWithoutRolesDataInput!
  create: GameCreateWithoutRolesInput!
}

input GameWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  players_every: ProfileWhereInput
  players_some: ProfileWhereInput
  players_none: ProfileWhereInput
  AND: [GameWhereInput!]
  OR: [GameWhereInput!]
  NOT: [GameWhereInput!]
}

input GameWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createGame(data: GameCreateInput!): Game!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteManyGames(where: GameWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createUtilisateur(data: UtilisateurCreateInput!): Utilisateur!
  updateUtilisateur(data: UtilisateurUpdateInput!, where: UtilisateurWhereUniqueInput!): Utilisateur
  updateManyUtilisateurs(data: UtilisateurUpdateManyMutationInput!, where: UtilisateurWhereInput): BatchPayload!
  upsertUtilisateur(where: UtilisateurWhereUniqueInput!, create: UtilisateurCreateInput!, update: UtilisateurUpdateInput!): Utilisateur!
  deleteUtilisateur(where: UtilisateurWhereUniqueInput!): Utilisateur
  deleteManyUtilisateurs(where: UtilisateurWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Profile {
  id: ID!
  name: String!
  description: String!
  imgUrl: String!
  role: Role!
  game: Game!
  team: Team
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  name: String!
  description: String!
  imgUrl: String
  role: RoleCreateOneWithoutPlayersInput!
  game: GameCreateOneWithoutPlayersInput!
  team: TeamCreateOneWithoutPlayersInput
}

input ProfileCreateManyInput {
  create: [ProfileCreateInput!]
  connect: [ProfileWhereUniqueInput!]
}

input ProfileCreateManyWithoutGameInput {
  create: [ProfileCreateWithoutGameInput!]
  connect: [ProfileWhereUniqueInput!]
}

input ProfileCreateManyWithoutRoleInput {
  create: [ProfileCreateWithoutRoleInput!]
  connect: [ProfileWhereUniqueInput!]
}

input ProfileCreateManyWithoutTeamInput {
  create: [ProfileCreateWithoutTeamInput!]
  connect: [ProfileWhereUniqueInput!]
}

input ProfileCreateWithoutGameInput {
  name: String!
  description: String!
  imgUrl: String
  role: RoleCreateOneWithoutPlayersInput!
  team: TeamCreateOneWithoutPlayersInput
}

input ProfileCreateWithoutRoleInput {
  name: String!
  description: String!
  imgUrl: String
  game: GameCreateOneWithoutPlayersInput!
  team: TeamCreateOneWithoutPlayersInput
}

input ProfileCreateWithoutTeamInput {
  name: String!
  description: String!
  imgUrl: String
  role: RoleCreateOneWithoutPlayersInput!
  game: GameCreateOneWithoutPlayersInput!
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  imgUrl_ASC
  imgUrl_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  name: String!
  description: String!
  imgUrl: String!
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
  AND: [ProfileSubscriptionWhereInput!]
  OR: [ProfileSubscriptionWhereInput!]
  NOT: [ProfileSubscriptionWhereInput!]
}

input ProfileUpdateDataInput {
  name: String
  description: String
  imgUrl: String
  role: RoleUpdateOneRequiredWithoutPlayersInput
  game: GameUpdateOneRequiredWithoutPlayersInput
  team: TeamUpdateOneWithoutPlayersInput
}

input ProfileUpdateInput {
  name: String
  description: String
  imgUrl: String
  role: RoleUpdateOneRequiredWithoutPlayersInput
  game: GameUpdateOneRequiredWithoutPlayersInput
  team: TeamUpdateOneWithoutPlayersInput
}

input ProfileUpdateManyInput {
  create: [ProfileCreateInput!]
  update: [ProfileUpdateWithWhereUniqueNestedInput!]
  upsert: [ProfileUpsertWithWhereUniqueNestedInput!]
  delete: [ProfileWhereUniqueInput!]
  connect: [ProfileWhereUniqueInput!]
  disconnect: [ProfileWhereUniqueInput!]
}

input ProfileUpdateManyMutationInput {
  name: String
  description: String
  imgUrl: String
}

input ProfileUpdateManyWithoutGameInput {
  create: [ProfileCreateWithoutGameInput!]
  delete: [ProfileWhereUniqueInput!]
  connect: [ProfileWhereUniqueInput!]
  disconnect: [ProfileWhereUniqueInput!]
  update: [ProfileUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [ProfileUpsertWithWhereUniqueWithoutGameInput!]
}

input ProfileUpdateManyWithoutRoleInput {
  create: [ProfileCreateWithoutRoleInput!]
  delete: [ProfileWhereUniqueInput!]
  connect: [ProfileWhereUniqueInput!]
  disconnect: [ProfileWhereUniqueInput!]
  update: [ProfileUpdateWithWhereUniqueWithoutRoleInput!]
  upsert: [ProfileUpsertWithWhereUniqueWithoutRoleInput!]
}

input ProfileUpdateManyWithoutTeamInput {
  create: [ProfileCreateWithoutTeamInput!]
  delete: [ProfileWhereUniqueInput!]
  connect: [ProfileWhereUniqueInput!]
  disconnect: [ProfileWhereUniqueInput!]
  update: [ProfileUpdateWithWhereUniqueWithoutTeamInput!]
  upsert: [ProfileUpsertWithWhereUniqueWithoutTeamInput!]
}

input ProfileUpdateWithoutGameDataInput {
  name: String
  description: String
  imgUrl: String
  role: RoleUpdateOneRequiredWithoutPlayersInput
  team: TeamUpdateOneWithoutPlayersInput
}

input ProfileUpdateWithoutRoleDataInput {
  name: String
  description: String
  imgUrl: String
  game: GameUpdateOneRequiredWithoutPlayersInput
  team: TeamUpdateOneWithoutPlayersInput
}

input ProfileUpdateWithoutTeamDataInput {
  name: String
  description: String
  imgUrl: String
  role: RoleUpdateOneRequiredWithoutPlayersInput
  game: GameUpdateOneRequiredWithoutPlayersInput
}

input ProfileUpdateWithWhereUniqueNestedInput {
  where: ProfileWhereUniqueInput!
  data: ProfileUpdateDataInput!
}

input ProfileUpdateWithWhereUniqueWithoutGameInput {
  where: ProfileWhereUniqueInput!
  data: ProfileUpdateWithoutGameDataInput!
}

input ProfileUpdateWithWhereUniqueWithoutRoleInput {
  where: ProfileWhereUniqueInput!
  data: ProfileUpdateWithoutRoleDataInput!
}

input ProfileUpdateWithWhereUniqueWithoutTeamInput {
  where: ProfileWhereUniqueInput!
  data: ProfileUpdateWithoutTeamDataInput!
}

input ProfileUpsertWithWhereUniqueNestedInput {
  where: ProfileWhereUniqueInput!
  update: ProfileUpdateDataInput!
  create: ProfileCreateInput!
}

input ProfileUpsertWithWhereUniqueWithoutGameInput {
  where: ProfileWhereUniqueInput!
  update: ProfileUpdateWithoutGameDataInput!
  create: ProfileCreateWithoutGameInput!
}

input ProfileUpsertWithWhereUniqueWithoutRoleInput {
  where: ProfileWhereUniqueInput!
  update: ProfileUpdateWithoutRoleDataInput!
  create: ProfileCreateWithoutRoleInput!
}

input ProfileUpsertWithWhereUniqueWithoutTeamInput {
  where: ProfileWhereUniqueInput!
  update: ProfileUpdateWithoutTeamDataInput!
  create: ProfileCreateWithoutTeamInput!
}

input ProfileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  imgUrl: String
  imgUrl_not: String
  imgUrl_in: [String!]
  imgUrl_not_in: [String!]
  imgUrl_lt: String
  imgUrl_lte: String
  imgUrl_gt: String
  imgUrl_gte: String
  imgUrl_contains: String
  imgUrl_not_contains: String
  imgUrl_starts_with: String
  imgUrl_not_starts_with: String
  imgUrl_ends_with: String
  imgUrl_not_ends_with: String
  role: RoleWhereInput
  game: GameWhereInput
  team: TeamWhereInput
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  game(where: GameWhereUniqueInput!): Game
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  utilisateur(where: UtilisateurWhereUniqueInput!): Utilisateur
  utilisateurs(where: UtilisateurWhereInput, orderBy: UtilisateurOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Utilisateur]!
  utilisateursConnection(where: UtilisateurWhereInput, orderBy: UtilisateurOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UtilisateurConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  name: String!
  imgUrl: String!
  game: Game!
  players(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile!]
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  name: String!
  imgUrl: String!
  game: GameCreateOneWithoutRolesInput!
  players: ProfileCreateManyWithoutRoleInput
}

input RoleCreateManyInput {
  create: [RoleCreateInput!]
  connect: [RoleWhereUniqueInput!]
}

input RoleCreateManyWithoutGameInput {
  create: [RoleCreateWithoutGameInput!]
  connect: [RoleWhereUniqueInput!]
}

input RoleCreateOneWithoutPlayersInput {
  create: RoleCreateWithoutPlayersInput
  connect: RoleWhereUniqueInput
}

input RoleCreateWithoutGameInput {
  name: String!
  imgUrl: String!
  players: ProfileCreateManyWithoutRoleInput
}

input RoleCreateWithoutPlayersInput {
  name: String!
  imgUrl: String!
  game: GameCreateOneWithoutRolesInput!
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  imgUrl_ASC
  imgUrl_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
  imgUrl: String!
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateDataInput {
  name: String
  imgUrl: String
  game: GameUpdateOneRequiredWithoutRolesInput
  players: ProfileUpdateManyWithoutRoleInput
}

input RoleUpdateInput {
  name: String
  imgUrl: String
  game: GameUpdateOneRequiredWithoutRolesInput
  players: ProfileUpdateManyWithoutRoleInput
}

input RoleUpdateManyInput {
  create: [RoleCreateInput!]
  update: [RoleUpdateWithWhereUniqueNestedInput!]
  upsert: [RoleUpsertWithWhereUniqueNestedInput!]
  delete: [RoleWhereUniqueInput!]
  connect: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
}

input RoleUpdateManyMutationInput {
  name: String
  imgUrl: String
}

input RoleUpdateManyWithoutGameInput {
  create: [RoleCreateWithoutGameInput!]
  delete: [RoleWhereUniqueInput!]
  connect: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  update: [RoleUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [RoleUpsertWithWhereUniqueWithoutGameInput!]
}

input RoleUpdateOneRequiredWithoutPlayersInput {
  create: RoleCreateWithoutPlayersInput
  update: RoleUpdateWithoutPlayersDataInput
  upsert: RoleUpsertWithoutPlayersInput
  connect: RoleWhereUniqueInput
}

input RoleUpdateWithoutGameDataInput {
  name: String
  imgUrl: String
  players: ProfileUpdateManyWithoutRoleInput
}

input RoleUpdateWithoutPlayersDataInput {
  name: String
  imgUrl: String
  game: GameUpdateOneRequiredWithoutRolesInput
}

input RoleUpdateWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateDataInput!
}

input RoleUpdateWithWhereUniqueWithoutGameInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateWithoutGameDataInput!
}

input RoleUpsertWithoutPlayersInput {
  update: RoleUpdateWithoutPlayersDataInput!
  create: RoleCreateWithoutPlayersInput!
}

input RoleUpsertWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateDataInput!
  create: RoleCreateInput!
}

input RoleUpsertWithWhereUniqueWithoutGameInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateWithoutGameDataInput!
  create: RoleCreateWithoutGameInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  imgUrl: String
  imgUrl_not: String
  imgUrl_in: [String!]
  imgUrl_not_in: [String!]
  imgUrl_lt: String
  imgUrl_lte: String
  imgUrl_gt: String
  imgUrl_gte: String
  imgUrl_contains: String
  imgUrl_not_contains: String
  imgUrl_starts_with: String
  imgUrl_not_starts_with: String
  imgUrl_ends_with: String
  imgUrl_not_ends_with: String
  game: GameWhereInput
  players_every: ProfileWhereInput
  players_some: ProfileWhereInput
  players_none: ProfileWhereInput
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
}

type Subscription {
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  utilisateur(where: UtilisateurSubscriptionWhereInput): UtilisateurSubscriptionPayload
}

type Team {
  id: ID!
  name: String!
  ownerID: ID!
  description: String!
  wantedRoles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
  players(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile!]
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  name: String!
  ownerID: ID!
  description: String
  wantedRoles: RoleCreateManyInput
  players: ProfileCreateManyWithoutTeamInput
}

input TeamCreateOneWithoutPlayersInput {
  create: TeamCreateWithoutPlayersInput
  connect: TeamWhereUniqueInput
}

input TeamCreateWithoutPlayersInput {
  name: String!
  ownerID: ID!
  description: String
  wantedRoles: RoleCreateManyInput
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  ownerID_ASC
  ownerID_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String!
  ownerID: ID!
  description: String!
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateInput {
  name: String
  ownerID: ID
  description: String
  wantedRoles: RoleUpdateManyInput
  players: ProfileUpdateManyWithoutTeamInput
}

input TeamUpdateManyMutationInput {
  name: String
  ownerID: ID
  description: String
}

input TeamUpdateOneWithoutPlayersInput {
  create: TeamCreateWithoutPlayersInput
  update: TeamUpdateWithoutPlayersDataInput
  upsert: TeamUpsertWithoutPlayersInput
  delete: Boolean
  disconnect: Boolean
  connect: TeamWhereUniqueInput
}

input TeamUpdateWithoutPlayersDataInput {
  name: String
  ownerID: ID
  description: String
  wantedRoles: RoleUpdateManyInput
}

input TeamUpsertWithoutPlayersInput {
  update: TeamUpdateWithoutPlayersDataInput!
  create: TeamCreateWithoutPlayersInput!
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  ownerID: ID
  ownerID_not: ID
  ownerID_in: [ID!]
  ownerID_not_in: [ID!]
  ownerID_lt: ID
  ownerID_lte: ID
  ownerID_gt: ID
  ownerID_gte: ID
  ownerID_contains: ID
  ownerID_not_contains: ID
  ownerID_starts_with: ID
  ownerID_not_starts_with: ID
  ownerID_ends_with: ID
  ownerID_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  wantedRoles_every: RoleWhereInput
  wantedRoles_some: RoleWhereInput
  wantedRoles_none: RoleWhereInput
  players_every: ProfileWhereInput
  players_some: ProfileWhereInput
  players_none: ProfileWhereInput
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
  name: String
  ownerID: ID
}

type Utilisateur {
  id: ID!
  email: String!
  password: String!
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile!]
}

type UtilisateurConnection {
  pageInfo: PageInfo!
  edges: [UtilisateurEdge]!
  aggregate: AggregateUtilisateur!
}

input UtilisateurCreateInput {
  email: String!
  password: String!
  profiles: ProfileCreateManyInput
}

type UtilisateurEdge {
  node: Utilisateur!
  cursor: String!
}

enum UtilisateurOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UtilisateurPreviousValues {
  id: ID!
  email: String!
  password: String!
}

type UtilisateurSubscriptionPayload {
  mutation: MutationType!
  node: Utilisateur
  updatedFields: [String!]
  previousValues: UtilisateurPreviousValues
}

input UtilisateurSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UtilisateurWhereInput
  AND: [UtilisateurSubscriptionWhereInput!]
  OR: [UtilisateurSubscriptionWhereInput!]
  NOT: [UtilisateurSubscriptionWhereInput!]
}

input UtilisateurUpdateInput {
  email: String
  password: String
  profiles: ProfileUpdateManyInput
}

input UtilisateurUpdateManyMutationInput {
  email: String
  password: String
}

input UtilisateurWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  profiles_every: ProfileWhereInput
  profiles_some: ProfileWhereInput
  profiles_none: ProfileWhereInput
  AND: [UtilisateurWhereInput!]
  OR: [UtilisateurWhereInput!]
  NOT: [UtilisateurWhereInput!]
}

input UtilisateurWhereUniqueInput {
  id: ID
  email: String
}
`