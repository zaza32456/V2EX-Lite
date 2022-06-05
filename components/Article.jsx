import React from 'react'
import Navbar from './Navbar'
import NavbarLite from './NavbarLite'
import Topic from './Topic'

const Article = () => {
  return (
    <div className='w-9/12 min-w-128 max-w-160'>

      <Navbar />
      <NavbarLite />

      <div>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？有没有一些高质量的 Python 内容推荐？有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
      </div>

    </div>
  )
}

export default Article