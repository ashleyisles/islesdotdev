import Link from 'next/link'
import React from 'react'
import { PostMeta } from './post-meta'
import { Tag } from './tag'

export const Post = ({ post }) => {

  const { link, module: { meta } } = post
  
  return (
    <>
      <article className="mt-8 mb-6">
        <PostMeta meta={meta} />
        <Link href={`/blog${link}`}>
          <a className="text-lg text-brand font-semibold">Read More &rarr;</a>
        </Link>
      </article>
      <hr />
    </>
  )
}
