import Head from 'next/head'

export default function Home () {
  return (
    <div className="flex w-full h-full align-center self-center justify-center flex-col">
      <Head>
        <title>Ashley Isles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="self-center text-center">
        <h1 className="text-black dark:text-white text-6xl font-bold font-display"><span role="img" aria-label="waving hand, brown skin tone">👋🏾</span> Hi, I’m Ashley. </h1>
        <p className="text-gray-600 dark:text-gray-300 text-2xl mt-5">I'm a design-minded web developer based in Texas <span role="img" aria-label="Cowboy">🤠</span></p>
      </div>
      <hr className="my-12 w-64 border-2 rounded-full border-gray-400 self-center" />
      <div className="self-center grid gap-8 grid-flow-col">
        <a className="flex items-center dark:text-white" href="http://www.github.com/ashleyisles">
          <img className="h-8 w-auto mx-2" src="/logos/github-logo.svg" alt="Github Logo" />
          <span className="text-base hover:text-gray-600">@ashleyisles</span>
        </a>
        <a className="flex items-center dark:text-white" href="http://www.instagram.com/isles.dev">
          <img className="h-8 w-auto mx-2" src="/logos/instagram-logo.svg" alt="Instagram Logo" />
          <span className="text-base hover:text-gray-600">@isles.dev</span>
        </a>
        <a className="flex items-center dark:text-white" href="http://www.twitter.com/islesdotdev">
          <img className="h-8 w-auto mx-2" src="/logos/twitter-logo.svg" alt="Twitter Logo" />
          <span className="text-base hover:text-gray-600">@islesdotdev</span>
        </a>
      </div>
    </div>
  )
}
