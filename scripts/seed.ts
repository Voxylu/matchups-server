import { prisma } from '../generated/prisma-client'

async function main() {
  await prisma.createGame({
    name: 'Overwatch',
    description: 'Competetive FPS.',
    roles: {
      create: [
        {
          name: 'Damage',
          imgUrl:
            'https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/1/1c/New_Damage_Icon.png?version=19a5a0359521bbf4b933e87539ae0e10',
        },
        {
          name: 'Tank',
          imgUrl:
            'https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/d/d4/New_Tank_Icon.png?version=e5a23205bcb4745d4e834fc84bd019a5',
        },
        {
          name: 'Support',
          imgUrl:
            'https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/f/f7/New_Support_Icon.png?version=aed27db897f9f7d34b434e431649d9b1',
        },
        {
          name: 'Flex',
          imgUrl: 'https://pix.watch/5Zb22r/MTYdCY.png',
        },
      ],
    },
  })
}

main()
