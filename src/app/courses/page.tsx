import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Page() {
  const courses = await prisma.course.findMany();
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>{course.name}</div>
      ))}
    </div>
  );
}
