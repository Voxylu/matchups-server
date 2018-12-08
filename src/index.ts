import { Prisma } from '../generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'
import { schema } from './schema'

const server = new GraphQLServer({
  schema,
  context: (ctx) => {
    return {
      ...ctx,
      prisma: new Prisma({ endpoint: process.env.PRISMA_SERVER }),
    }
  },
})

const PORT = parseInt(process.env.PORT, 10) || 4000
const HOST = process.env.HOST || 'localhost'

async function main() {
  const app = await server.createHttpServer({})
  app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
  })
}

main()
