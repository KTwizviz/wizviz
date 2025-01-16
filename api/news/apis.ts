// news-detail
const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;
export const getNewsDetail = async (
  artcSeq: string
): Promise<ArticleContentsResponse["data"]> => {
  const queryparam = artcSeq ? `newsdetail?artcSeq=${artcSeq}` : "";
  const url = `http://${BASE_URL}/api/article/${queryparam}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch news detail");
  }

  const response: ArticleContentsResponse = await res.json();
  return response.data;
};
