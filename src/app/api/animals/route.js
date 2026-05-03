import animals from '@/app/data/animals.json';

export async function GET() {
  return Response.json(animals);
}