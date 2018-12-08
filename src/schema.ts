import * as fs from 'fs'
import * as path from 'path'
import { resolvers } from './resolvers/'
import { makeExecutableSchema } from 'graphql-tools'

export const schema = makeExecutableSchema({
  typeDefs: fs
    .readFileSync(path.join(__dirname, '../schema.graphql'))
    .toString(),
  resolvers: resolvers as any,
})
