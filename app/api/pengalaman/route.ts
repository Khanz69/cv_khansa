import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { pengalaman } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function GET() {
  try {
    const results = await db
      .select()
      .from(pengalaman)
      .where(eq(pengalaman.user_id, 1))
      .orderBy(desc(pengalaman.tahun_mulai));
    return NextResponse.json(results);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch experience' }, { status: 500 });
  }
}
