import React from 'react'
import { Tag } from './tag'

export const PostMeta = ({ meta }) => {
  return (
    <div className="mb-10">
      <span className="text-gray-500 uppercase text-sm tracking-widest">{meta.date}</span>
      <h1 className="font-display text-3xl font-bold" >{meta.title}</h1>
      <div className="mt-2">
        <p className="text-gray-600 text-lg font-light">{meta.description}</p>
        <div className="mt-2">
          {
            meta.tags && meta.tags.map(tag => {
              return <Tag key={`${meta.title}-tag-${tag}`}>{ tag }</Tag>
            })
          }
        </div>
      </div>
    </div>
  )
}
