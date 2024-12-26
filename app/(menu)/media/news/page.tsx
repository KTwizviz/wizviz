import NewsCard from "@/components/media/news-card";

export default function NewsPage() {
  // 예시 데이터 배열
  const newsData = [
    {
      id: 1,
      title: "2024 kt wiz 73승 기념뱃지 수령",
      content:
        "안녕하세요 kt wiz입니다. 이번 시즌 73승 달성을 기념하여 특별 제작된 기념뱃지를 제작하였습니다...",
      date: new Date("2024-01-23"),
      views: 1234,
    },
    {
      id: 2,
      title: "2024 시즌 개막전 안내",
      content: "2024 시즌 개막전 일정과 입장권 예매 안내드립니다...",
      date: new Date("2024-01-22"),
      views: 2345,
    },
    {
      id: 3,
      title: "구단 팬 사인회 개최",
      content: "kt wiz 선수들과 함께하는 팬 사인회를 개최합니다...",
      date: new Date("2024-01-21"),
      views: 3456,
    },
    {
      id: 4,
      title: "구단 팬 사인회 개최",
      content: "kt wiz 선수들과 함께하는 팬 사인회를 개최합니다...",
      date: new Date("2024-01-21"),
      views: 3456,
    },
    {
      id: 5,
      title: "구단 팬 사인회 개최",
      content: "kt wiz 선수들과 함께하는 팬 사인회를 개최합니다...",
      date: new Date("2024-01-21"),
      views: 3456,
    },
  ];

  return (
    <div>
      {newsData.map((news) => (
        <NewsCard
          key={news.id}
          title={news.title}
          content={news.content}
          date={news.date}
          views={news.views}
        />
      ))}
    </div>
  );
}
