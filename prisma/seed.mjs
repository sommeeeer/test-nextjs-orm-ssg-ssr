import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
async function main() {
  for (let i = 0; i < 100; i++) {
    await prisma.course.create({
      data: {
        name: faker.animal.cat(),
      },
    });
  }
  console.log('Seeded data done');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
