import { getNewsDetail } from "@/api/news/apis";
import { NewsDetail } from "@/components/media/news-detail";

export default async function page() {
  const { article } = await getNewsDetail("190048"); //임시
  return <NewsDetail data={article} />;
}
