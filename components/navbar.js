import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="flex justify-center py-4 w-full items-center bg-transparent">
      <nav className="gap-12 grid grid-flow-col grid-cols-4 items-center text-center">
        {/* <Link href="/about">
          <a className="text-black dark:text-white">About</a>
        </Link> */}

        <Link href="/">
          <a className="flex justify-center">
            <img src="/memoji.png" className="h-16 w-auto" alt="Ashley's Memoji"></img>
          </a>
        </Link>
        <Link href="/portfolio">
          <a className="hover:text-brand text-black dark:text-white">Portfolio</a>
        </Link>
        <Link href="/blog">
          <a className="hover:text-brand text-black dark:text-white">Blog</a>
        </Link>
        <Link href="/contact">
          <a className="hover:text-brand text-black dark:text-white">Contact</a>
        </Link>
      </nav>
    </div>
  )
}
