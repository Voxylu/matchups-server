import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'

import { MutationResolvers } from '../../../generated/graphqlgen'
import { isValidEmail } from '../../utils'

export const signup: MutationResolvers.SignupResolver = async (
  parent,
  { email, password: pass },
  { prisma }
) => {
  if (!isValidEmail(email)) {
    throw new Error('Invalid email.')
  }

  if (await prisma.$exists.utilisateur({ email })) {
    throw new Error('Email already exist.')
  }

  const password = bcrypt.hashSync(pass)

  const user = await prisma.createUtilisateur({ email, password })

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

  return {
    token,
    user,
  }
}

export const signin: MutationResolvers.SigninResolver = async (
  parent,
  { email, password },
  { prisma }
) => {
  const user = await prisma.utilisateur({ email })

  if (!user) {
    throw new Error('Invalid email or password.')
  }

  const valid = bcrypt.compareSync(password, user.password)

  if (!valid) {
    throw new Error('Invalid email or password.')
  }

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

  return {
    token,
    user,
  }
}
