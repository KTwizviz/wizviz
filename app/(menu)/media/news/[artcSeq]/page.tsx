interface ArticleResponse {
  data: {
    article: Article;
  };
}

interface Article {
  artcContents: string; // HTML 형식의 게시글 내용
  artcTitle: string; // 게시글 제목
  artcSeq: number; // 현재 게시글 순번
  artcNextSeq: number; // 다음 게시글 순번
  artcPrevSeq: number; // 이전 게시글 순번
  boardCode: string; // 게시판 코드
  boardCatSeq: number; // 게시판 카테고리 순번
  maxArticlePerPage: number; // 페이지당 최대 게시글 수
  imgFilePath: string; // 대표 이미지 경로
  delYn: "Y" | "N"; // 삭제 여부
  useYn: "Y" | "N"; // 사용 여부
  viewCnt: number; // 조회수
  regDttm: number; // 등록일시 (timestamp)
  regr: string; // 등록자
  updDttm: number; // 수정일시 (timestamp)
  updr: string; // 수정자
}
const data = {
  article: {
    artcContents:
      '<p style="text-align: center;">안녕하세요, kt wiz 야구단입니다. 9월 18일 vs삼성과의 경기에서는 kt wiz의 마스코트 빅, 또리와 함께하는 \'빅또리 데이\'행사를 만나볼 수 있습니다! 해당 경기에 한하여 이벤트 좌석 예매 시 빅또리 유니폼이 제공됩니다!&nbsp;<span style="font-size: 10pt;">자세한 사항은 공지 이미지를 확인해 주세요.</span></p><div style="text-align: center;"><br></div><p><br></p><p style="text-align: center;"><img src="https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907213144.1c9-59f077642c4b.jpg" class="txc-image" style="clear:none;float:none;"></p><p><br></p>',
    artcNextSeq: 190048,
    artcPrevSeq: 190173,
    artcSeq: 190049,
    artcTitle: "[안내] 9/18(수) 빅또리 데이 행사 안내﻿",
    boardCatSeq: 0,
    boardCode: "001",
    delYn: "N",
    imgFilePath:
      "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907213202.770-fea1de8a43c7.jpg",
    maxArticlePerPage: 0,
    regDttm: 1725712322000,
    regr: "gsc02063",
    updDttm: 1725713002000,
    updr: "gsc02063",
    useYn: "Y",
    viewCnt: 1058,
  },
};

export default function page() {
  const formatContent = (htmlContent: string) => {
    // <p> 태그로 묶인 내용들을 분리
    const paragraphs = htmlContent
      .split(/<\/?p[^>]*>/)
      .filter((p) => p.trim().length > 0);

    // 각 단락 처리
    const formattedParagraphs = paragraphs.map((p) => {
      // 이미지 태그가 있는 경우
      if (p.includes("<img")) {
        // 기존 이미지 태그 그대로 유지하고 p 태그로 감싸기
        return `<p style="text-align: center">${p}</p>`;
      }

      // 일반 텍스트인 경우
      const textContent = p.replace(/<[^>]*>/g, "").trim();
      if (textContent) {
        // 마침표로 문장 나누기
        const sentences = textContent
          .split(".")
          .filter((s) => s.trim().length > 0)
          .map((s) => `<p>${s.trim()}.</p>`)
          .join("\n");
        return sentences;
      }
      return "";
    });

    return formattedParagraphs.join("\n");
  };
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{data.article.artcTitle}</h1>
      <div
        className="space-y-4"
        dangerouslySetInnerHTML={{
          __html: formatContent(data.article.artcContents),
        }}
      />
    </div>
  );
}
