import animals from '@/public/data/animals.json';

export async function GET() {
  return Response.json(animals);
}