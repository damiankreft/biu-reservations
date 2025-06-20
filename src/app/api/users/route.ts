import { db } from '@/data/DataSource';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request: Request) {
  await sleep(3000);
  const data = await db();
  return new Response(JSON.stringify(data.users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request) {
  const newUser = await request.json();
  const data = await db();
  data.users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
