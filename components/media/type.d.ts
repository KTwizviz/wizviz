type NewsCardProps = {
  title: string;
  content: string;
  date: Date;
  views: number;
};
type ArticleContentsProps = {
  data: ArticleContentsType;
};
type ArticleContentsType = {
  artcContents: string; // HTML 형식의 게시글 내용
  artcTitle: string; // 게시글 제목
  artcSeq: string; // 현재 게시글 순번
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
};
