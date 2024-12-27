import NewsCard from "@/components/media/news-card";

export default function page() {
  return (
    <div>
      <NewsCard
        title="2024 kt wiz 73승 기념뱃지 수령"
        content="감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다. 명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다."
        date={new Date("2024-12-25")}
        views={99}
      />
    </div>
  );
}
