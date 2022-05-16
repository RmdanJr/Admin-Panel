import React, { useState } from 'react'

import './app.css'

import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'

const App: React.FC<{}> = () => {
  const [isSideOpen, setIsSideOpen] = useState<boolean>(true)
  const [title, setTitle] = useState<string>('users')

  const toggleSidebar = () => {
    setIsSideOpen(!isSideOpen)
  }

  const changeTitle = (newTitle:string) => {
    setTitle(newTitle)
  }

  return (
    <div id='layout'>
      <SideBar
        isSideOpen={isSideOpen}
        toggleSidebar={toggleSidebar}
        changeTitle={changeTitle}
      />
      <div id='main' className={isSideOpen ? 'over-main' : ''}>
        <Header isSideOpen={isSideOpen} title={title} />
        <div className='content'></div>
      </div>
    </div>
  )
}

export default App
