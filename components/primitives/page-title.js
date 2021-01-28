import React from 'react'

export const PageTitle = ({ children }) => {
  return (
    <h1 className="text-black dark:text-white text-6xl font-bold font-display">
      { children }
    </h1>
  )
}
