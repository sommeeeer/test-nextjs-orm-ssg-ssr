A test repo for this issue in Next.js docs: https://github.com/vercel/next.js/issues/69694

# How to run
```bash
pnpm install
pnpm prisma db push
pnpm seed
pnpm build && pnpm start
# then visit http://localhost:3000/courses
```

[Fetching data with an ORM or DB](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#fetching-data-on-the-server-with-an-orm-or-database) 

> Highlight: `This component will always fetch and display a dynamic, up-to-date list of blog posts.`

This statement is not true. By default all pages will be SSG, meaning that this example will not work as expected. 

### Is there any context that might help us understand?

I tested my theory with running `pnpm build && pnpm start` on a newly created Next.JS project with version: `14.2.7`:

```tsx
// app/courses/page.tsx
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
```
This page is SSG at build time, and is also SSG during `pnpm start`. I attached some photos for future proof:

![image](https://github.com/user-attachments/assets/8943b15f-63e2-4d85-a232-dffbbcf89c39)
![image](https://github.com/user-attachments/assets/adfb633c-e96c-42ac-84c1-1d39d854a619)

Solution:
I can make a PR to address this in the docs. Let me know if you want that. I'll link the PR to this issue

### Does the docs page already exist? Please link to it.

https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#fetching-data-on-the-server-with-an-orm-or-database