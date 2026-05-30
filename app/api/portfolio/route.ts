import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { portfolio } from '@/db/schema';
import { desc } from 'drizzle-orm';

export async function GET() {
  try {
    const results = await db.select().from(portfolio).orderBy(desc(portfolio.tahun_proyek));
    return NextResponse.json(results);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 });
  }
}
