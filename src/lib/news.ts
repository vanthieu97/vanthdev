export async function fetchVietnamNews(page?: string): Promise<NewsResponse> {
  const API_KEY = process.env.NEWSDATA_API_KEY;
  if (!API_KEY) {
    throw new Error('NEWSDATA_API_KEY is not configured');
  }

  const params = new URLSearchParams({
    country: 'vi',
    category: 'top',
    apikey: API_KEY,
    ...(page && { page }),
  });

  const res = await fetch(
    `https://newsdata.io/api/1/latest?${params.toString()}`,
    page ? { cache: 'no-store' } : { next: { revalidate: 300 } }
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error((data?.message as string) ?? 'Failed to fetch news');
  }

  return data;
}
