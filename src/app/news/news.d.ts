type NewsArticle = {
  article_id: string;
  link: string;
  title: string;
  description: string;
  image_url: string | null;
  source_name: string;
  pubDate: string;
  creator: string[] | null;
};

type NewsResponse = {
  status: string;
  totalResults?: number;
  results?: NewsArticle[];
  nextPage?: string;
};

