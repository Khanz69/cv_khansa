import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { pendidikan } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function GET() {
  try {
    const results = await db
      .select()
      .from(pendidikan)
      .where(eq(pendidikan.user_id, 1))
      .orderBy(desc(pendidikan.tahun_mulai));
    return NextResponse.json(results);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch education' }, { status: 500 });
  }
}
