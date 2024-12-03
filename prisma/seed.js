const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create 10 players
  for (let i = 0; i < 10; i++) {
    await prisma.player.create({
      data: {
        name: `name ${i}`,
        breed: `breed ${i}`,
        status: `bench`,
      },
    });
  }
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
