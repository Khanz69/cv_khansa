import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { layanan } from '@/db/schema';

export async function GET() {
  try {
    const results = await db.select().from(layanan);
    return NextResponse.json(results);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}
