import Head from 'next/head'
import React, { useState } from 'react'
import { Post } from '../../components/blog/post'
import { Input } from '../../components/primitives/input'
import { Select } from '../../components/primitives/select'
import { posts } from '../../helpers/getPosts'

export default function Blog () {

  const [filteredPosts, setFilteredPosts] = useState(posts)

  const handleSearch = (text) => {
    setFilteredPosts(posts.filter(post => post.module.meta.title.toLowerCase().includes(text.toLowerCase())))
  }
  
  return (
    <div className="w-full h-full grid grid-cols-6">
      <Head>
        <title>Blog - Ashley Isles</title>
      </Head>
      <div className="my-16 col-start-2 col-span-4 col-end-6">
        <h1 className="text-black dark:text-white text-center my-10 text-6xl font-bold font-display">Blog</h1>
        <div className="grid grid-flow-col gap-8">
          <Input placeholder="Search..." onChange={(text) => handleSearch(text)}></Input>
          <div className="flex-1">
            <Select></Select>
          </div>
        </div>
        {
          filteredPosts.map((post) => (
            <Post key={post.link} post={post} />
          ))
        }
      </div>
    </div>
  )
}
