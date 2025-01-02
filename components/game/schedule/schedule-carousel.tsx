'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ScheduleCarousel = ({ date }: { date: CalendarDate }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [center, setCenter] = useState<number>(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCenter(api.selectedScrollSnap() + 2)

    const onSelect = () => {
      setCenter(api.selectedScrollSnap() + 2)
    }

    // 이벤트 등록
    api.on("select", onSelect)

    // 언마운트 시 이벤트 제거 (cleanup)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className='flex justify-center pb-8 border-b'>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%]"
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

export default ScheduleCarousel
