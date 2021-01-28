import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className="flex flex-col min-h-screen min-w-screen bg-white dark:bg-gray-800" style={{ backgroundImage: `url(/topography.svg)`}}>
    <Navbar></Navbar>
    <main className="flex-1 h-full flex justify-center">
      <Component {...pageProps} />
    </main>
    {/* <Footer></Footer> */}
  </div>
}

export default MyApp
