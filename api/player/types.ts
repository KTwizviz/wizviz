export type CoachResponse = {
  data: {
    list: CoachInfo[];
  };
};
export type PitcherResponse = PitcherInfo[];

export type CoachDetailResponse = {
  data: {
    coachstep: {
      backnum: string;
      birth: string;
      career: string;
      career2: string;
      engName: string;
      gyear: string;
      height: string;
      heightWeight: string;
      hittype: string;
      mobilePlayerImg1: string;
      mobilePlayerImg2: string;
      pcode: string;
      playerName: string;
      playerPrvwImg: string;
      playerPrvwImg2: string;
      playerPrvwImg3: string;
      position: string;
      teamCode: string;
      teamName: string;
      weight: string;
    };
  };
};

export type PitcherDetailResponse = {
  data: {
    gameplayer: PitcherPersonalInfo;
    recentgamerecordlist: PitcherGameRecord[];
    recentgamerecordlistfutures: PitcherGameRecord[];
    seasonsummary: PitcherSeasonSummary;
    seasonsummaryfutures: PitcherSeasonSummary;
    yearrecordlist: PitcherYearRecord[];
  };
};
