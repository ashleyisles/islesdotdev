import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="justify-center flex py-4 w-full items-center bg-white dark:bg-gray-800">
      <div className="flex justify-between max-w-xl w-full">
        <div className="flex flex-col">
          <span className="text-sm text-gray-600 font-light">© 2021 Ashley Isles</span>
          <span className="text-sm text-gray-600 font-light">All Rights Reserved</span>
        </div>
        <div className="flex flex-row">
          <a className="flex items-center dark:text-white" href="github.com/ashleyisles">
            <img className="h-5 w-auto mx-2" src="/logos/github-logo.svg" alt="Github Logo" />
          </a>
          <a className="flex items-center dark:text-white" href="instagram.com/isles.dev">
            <img className="h-5 w-auto mx-2" src="/logos/instagram-logo.svg" alt="Instagram Logo" />
          </a>
          <a className="flex items-center dark:text-white" href="twitter.com/islesdotdev">
            <img className="h-5 w-auto mx-2" src="/logos/twitter-logo.svg" alt="Twitter Logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}
