'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TeamStatsCard from './team-stats-card'

export default function GameMatchup() {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-background shadow-lg">
      <CardContent className="p-6">
        {/* Date Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button variant="ghost" size="icon" className="hover:bg-accent rounded-full">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-1">10.09 (수) 14:00</h2>
            <p className="text-muted-foreground">14:00 수요일</p>
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-accent rounded-full">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <TeamStatsCard />
        <div className="text-3xl font-bold text-primary">VS</div>
        <TeamStatsCard />

      </CardContent >
    </Card >
  )
}

