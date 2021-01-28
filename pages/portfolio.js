import Head from 'next/head'
import React from 'react'
import { PortfolioItem } from '../components/portfolio-item'
import data from '../public/data.json'

export default function Portfolio () {
  return (
    <div className="w-full h-full grid grid-cols-6">
      <Head>
        <title>Portfolio - Ashley Isles</title>
      </Head>
      <div className="col-start-2 col-span-4 col-end-6 flex flex-col">
        {
          data.portfolio.map((item, i) => {
            return (
              <PortfolioItem key={`portfolio-${i}`} item={item} />
            )
          })
        }
      </div>
    </div>
  )
}
