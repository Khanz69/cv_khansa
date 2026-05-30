import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { sertifikat } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const results = await db
      .select()
      .from(sertifikat)
      .where(eq(sertifikat.user_id, 1));
    return NextResponse.json(results);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch certificates' }, { status: 500 });
  }
}
