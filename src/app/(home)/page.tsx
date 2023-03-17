import { Inter } from 'next/font/google'
import type { NextPage } from 'next'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Netflix - clone</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      Lets build netflix
      {/* Header */}
      <main>
        {/* Banner */}
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home
