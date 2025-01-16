// news-detail
export const getNewsDetail = async (
  artcSeq: string
): Promise<ArticleContentsResponse["data"]> => {
  const queryparam = artcSeq ? `newsdetail?artcSeq=${artcSeq}` : "";

  const url = `/api/article/${queryparam}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch news detail");
  }

  const response: ArticleContentsResponse = await res.json();
  return response.data;
};
