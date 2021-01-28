import React from 'react'

export const PortfolioItem = ({ item }) => {
  return (
    <div className="col-start-2 col-span-4 col-end-6 my-32 flex flex-row">
      <img className="max-w-3xl" src={`/minis/${item.src}`} />
      <div className="flex flex-col rounded-lg p-4 justify-center items-center">
        <div className="self-center">
          {
            item.company &&
            <h5 className="text-sm font-semibold text-blue-500">{`@${item.company}`}</h5>
          }
          <h2 className="text-3xl font-bold text-black font-display">{ item.name }</h2>
          <hr className="rounded-full border-gray-200 my-3 w-48" />
          <p className="text-black text-base font-light">{ item.description }</p>
          <div className="mt-12">
            <div className="grid gap-4 grid-flow-col justify-start items-center">
              {
                item.stack.map(el => {
                  return (
                    <img key={el.src} className="w-12" src={`/logos/${el.src}`} alt={el.alt} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
