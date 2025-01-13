import Image from "next/image"

const TeamStatsCard = () => {
  return (
    <div>
      {/* Teams and Stats */}
      <div className="grid grid-cols-[1fr,auto,1fr] gap-8 items-center">
        {/* LG Twins */}
        <div className="text-center space-y-6">
          <div className="relative h-32 w-32 mx-auto">
            <Image
              src=""
              alt="LG Twins Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="bg-accent/10 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-4">LG (원정)</h3>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">승</p>
                <p className="font-bold">76</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">패</p>
                <p className="font-bold">66</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">무</p>
                <p className="font-bold">2</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">승률</p>
                <p className="font-bold">0.535</p>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <span className="font-medium">시즌 상대 전적:</span>
              <span className="ml-2">9승 7패 0무 (0.563)</span>
            </div>
            <div className="mt-2 inline-block px-3 py-1 bg-primary/10 rounded-full text-sm">
              3위
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamStatsCard
