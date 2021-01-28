import React from 'react'

export const Tag = ({ children }) => {
  return (
    <div className="leading-6 rounded-md text-xs inline-flex px-3 text-brand dark:text-white dark:bg-transparent border border-transparent dark:border-white uppercase tracking-widest font-medium bg-brand bg-opacity-10">
      { children }
    </div>
  )
}
