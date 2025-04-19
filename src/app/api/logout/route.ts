// app/api/logout/route.ts (Server-Side)
import { cookies } from 'next/headers'; // Server-side only API

export async function POST() {
  const cookieStore =await cookies();
  cookieStore.delete('accessToken'); // Remove the cookie

  return new Response(
    JSON.stringify({ message: 'Logged out successfully' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
