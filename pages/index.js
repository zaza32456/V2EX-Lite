import Head from 'next/head'
import Image from 'next/image'
import Article from '../components/Article'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebars from '../components/Sidebars'

export default function Home() {
  return (
    <div className='absolute w-full'>
        <Header />
        <div id='main-container' className='bg-gray-200 h-full w-full border-b-2 border-gray-300'>
          <main className='flex p-5 w-full justify-center '>
            <Article />
            <Sidebars />
          </main>
        </div>
        <Footer />
    </div>
  )
}
