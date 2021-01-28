import Head from 'next/head'
import { PostMeta } from './post-meta'

export default function MDWrapper ({ children, meta }) {
  return (
    <>
      <Head>
        <title>{`${meta.title} - Ashley Isles`}</title>
      </Head>
      <article className="my-32 prose prose-lg">
      <div className="grid gap-4 grid-flow-col justify-start items-center mb-2">
        <span className="text-brand uppercase tracking-widest text-sm">{meta.date}</span>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <span className="text-gray-500 uppercase tracking-widest text-sm">{`${meta.readTime} min read`}</span>
      </div>
        { children }
      </article>
    </>
  )
}
