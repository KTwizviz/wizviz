const getMonthSchedules = async (params: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/game/monthschedule?yearMonth=${params}`,
    );

    if (!res.ok) {
      throw new Error('네트워크 문제 발생');
    };

    const data = await res.json();
    const gameSchedules = data.data.list.map((gameSchedule: GameSchedule, index: number) => ({
      ...gameSchedule,
      key: index
    }));

    return gameSchedules;
  } catch (error) {
    console.error('API 요청 에러:', error);
  }
}

export default getMonthSchedules