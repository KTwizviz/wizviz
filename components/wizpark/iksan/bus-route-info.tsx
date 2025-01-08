import React from 'react'

type BusRouteInfoProps = {
  title: string;
  regularRoutes: string;
  expressRoutes?: string;
}

export function BusRouteInfo({ title, regularRoutes, expressRoutes }: BusRouteInfoProps) {
  return (
    <div className="flex-1 border rounded-xl p-4">
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <div className="space-y-4">
        <div>
          <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm mb-2">
            일반
          </span>
          <p className="text-gray-700">{regularRoutes}</p>
        </div>
        {expressRoutes ?
          <div>
            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-2">
              좌석
            </span>
            <p className="text-gray-700">{expressRoutes}</p>
          </div> :
          null}
      </div>
    </div>
  )
}