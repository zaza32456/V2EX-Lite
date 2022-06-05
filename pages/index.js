import Head from 'next/head'
import Image from 'next/image'
import Article from '../components/Article'
import Header from '../components/Header'
import Sidebars from '../components/Sidebars'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='absolute w-full'>
        <Header />
        <div id='main-container' className='bg-gray-200 h-full w-full'>
          <main className='flex p-5 w-full justify-center'>
            <Article />
            <Sidebars />
          </main>
        </div>
    </div>
  )
}
