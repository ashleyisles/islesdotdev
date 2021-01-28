import React from 'react'

export const Textarea = ({ placeholder, type, onChange }) => {
  return (
    <textarea onChange={(e) => onChange(e.target.value)} type={type || 'text'} placeholder={placeholder || 'Type something...'} className="bg-gray-100 dark:bg-opacity-10 h-64 rounded-lg leading-10 px-4 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"></textarea>
  )
}
