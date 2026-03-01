import { NextResponse } from 'next/server';
import { fetchGoldPriceData } from '@/lib/gold-price';

export async function GET() {
  try {
    const data = await fetchGoldPriceData();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (err) {
    console.error('Gold price API error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to fetch gold price' },
      { status: 500 }
    );
  }
}
