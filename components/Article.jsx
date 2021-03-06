import React from 'react'
import Navbar from './Navbar'
import NavbarLite from './NavbarLite'
import NodeNav from './NodeNav'
import Topic from './Topic'

const Article = () => {
  return (
    <div className='w-9/12 min-w-128 max-w-184  '>

      <Navbar />
      <NavbarLite />

      <div>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？有没有一些高质量的 Python 内容推荐？有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
        <Topic topicLink='/' topicContext='有没有一些高质量的 Python 内容推荐？'/>
      </div>

      <NodeNav />

    </div>
  )
}

export default Article