import { Request } from 'express'
import * as jwt from 'jsonwebtoken'
import { Context } from './types'

export function isValidEmail(email: string) {
  return email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

export async function getUserId(ctx: Context) {
  const Authorization = ctx.request.headers.authorization
  if (Authorization) {
    try {
      const token = Authorization.replace('Bearer ', '')
      const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
        userId: string
      }
      const exist = await ctx.prisma.$exists.utilisateur({ id: userId })
      if (exist) {
        return userId
      }
    } catch (e) {
      console.error(e)
      throw new Error('Unauthorize.')
    }
  }
  throw new Error('Unauthorize.')
}

export function verifyNameAndDescription(name?: string, description?: string) {
  if (name && name.length > 50) {
    throw new Error('Name is too long.')
  } else if (description && description.length > 600) {
    throw new Error('Description is tool long.')
  }
}
