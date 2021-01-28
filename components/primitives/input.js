import React from 'react'

export const Input = ({ type, placeholder, onChange }) => {
  return (
    <input onChange={(e) => onChange(e.target.value)} type={type || 'text'} placeholder={placeholder || 'Type something...'} className="bg-gray-100 dark:bg-opacity-10 text-black dark:text-white rounded-lg leading-10 px-4 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 w-full"></input>
  )
}
