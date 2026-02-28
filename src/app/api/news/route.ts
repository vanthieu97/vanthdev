import { NextResponse } from 'next/server';
import { fetchVietnamNews } from '@/lib/news';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') ?? undefined;

  try {
    const data = await fetchVietnamNews(page);
    return NextResponse.json(data);
  } catch (err) {
    console.error('News API error:', err);
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : 'Failed to fetch news',
      },
      { status: 500 }
    );
  }
}
