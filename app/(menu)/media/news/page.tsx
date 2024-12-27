import NewsCard from "@/components/media/news-card";
import CustomPagination from "@/components/ui/custom-pagination";
import { CustomSelectWithInput } from "@/components/ui/custom-select";
import { NewsData } from "@/constants/news-data";

type NewsPageProps = {
  searchParams: { page?: string };
};
export default function NewsPage({ searchParams }: NewsPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 5;

  const currentItems = NewsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <CustomSelectWithInput />
      {currentItems.map((news) => (
        <NewsCard
          key={news.id}
          title={news.title}
          content={news.content}
          date={news.date}
          views={news.views}
        />
      ))}
      <div className="p-4">
        <CustomPagination />
      </div>
    </>
  );
}
