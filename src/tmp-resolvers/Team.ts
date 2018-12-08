// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TeamResolvers } from "../../generated/graphqlgen";

export const Team: TeamResolvers.Type = {
  ...TeamResolvers.defaultResolvers,

  players: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  wantedRoles: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
