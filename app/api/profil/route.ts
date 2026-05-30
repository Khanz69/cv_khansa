import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { profil } from '@/db/schema';

export async function GET() {
  try {
    const results = await db.select().from(profil).limit(1);
    return NextResponse.json(results[0] || {});
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}
