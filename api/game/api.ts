export async function getMonthSchedules(params: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/game/monthschedule?yearMonth=${params}`,
    );

    if (!res.ok) {
      throw new Error('네트워크 문제 발생');
    };

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('API 요청 에러:', error);
  }
}

export async function getAllSchedules(params: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/game/allgameschedule?yearMonth=${params}`,
    );

    if (!res.ok) {
      throw new Error('네트워크 문제 발생');
    };

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('API 요청 에러:', error);
  }
}