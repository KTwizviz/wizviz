const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

// news-detail
export const getNewsDetail = async (
  artcSeq: string
): Promise<ArticleContentsResponse["data"]> => {
  //   const queryparam = artcSeq ? `newsdetail?artcSeq=${artcSeq}` : "";
  const queryparam = artcSeq ? `newsdetail?artcSeq=190049` : ""; //예시
  const url = `${BASE_URL}/article/${queryparam}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch news detail");
  }

  const response: ArticleContentsResponse = await res.json();
  console.log(response.data.article, "나 아티클 리스펀스");
  return response.data;
};
