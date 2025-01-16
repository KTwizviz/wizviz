import { formatDate } from "date-fns";
import { CalendarDays, Eye } from "lucide-react";

export const NewsDetail = ({ data }: ArticleContentsProps) => {
  const formatContent = (htmlContent: string) => {
    const paragraphs = htmlContent
      .split(/<\/?p[^>]*>/)
      .filter((p) => p.trim().length > 0);

    const formattedParagraphs = paragraphs.map((p) => {
      if (p.includes("<img")) {
        return `<p style="text-align: center">${p}</p>`;
      }

      const textContent = p.replace(/<[^>]*>/g, "").trim();
      if (textContent) {
        // 마침표와 느낌표를 기준으로 문장 나누기
        const sentences = textContent
          .split(/[.!]/) // 정규식으로 .과 ! 모두를 구분자로 사용
          .filter((s) => s.trim().length > 0)
          .map((s) => {
            const originalEnding = textContent.charAt(
              textContent.indexOf(s) + s.length
            );
            // 원래 문장의 마지막 부호(. 또는 !)를 유지
            return `<p>${s.trim()}${originalEnding}</p>`;
          })
          .join("\n");
        return sentences;
      }
      return "";
    });

    return formattedParagraphs.join("\n");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-6 bg-SYSTEM-main/30">
          {data.artcTitle}
        </h1>
        <div className="flex items-center gap-1 h-fit">
          <CalendarDays className="text-ELSE-7374 w-6 h-6" />
          <div className="text-ELSE-7374 ">
            {formatDate(data.regDttm, "yyyy.MM.dd")}
          </div>
        </div>
      </div>
      <div
        className="space-y-2"
        dangerouslySetInnerHTML={{
          __html: formatContent(data.artcContents),
        }}
      />
      <div className="flex gap-1 pt-1">
        <Eye className="text-ELSE-7374 w-6 h-6" />
        <div className="text-ELSE-7374"> 조회수 : {data.viewCnt}</div>
      </div>
    </div>
  );
};
