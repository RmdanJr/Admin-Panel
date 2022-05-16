import React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import InsightsIcon from '@mui/icons-material/Insights'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'

import './sidebar.css'

const SideBar: React.FC<{
  isSideOpen: boolean
  toggleSidebar: () => void
  changeTitle: (t: string) => void
}> = ({ isSideOpen, toggleSidebar, changeTitle }) => {
  const itemIconStyle = {
    fontSize: '2rem',
    color: '#666666',
  }

  return (
    <div id='left' className={isSideOpen ? 'open' : 'closed'}>
      <div className='icon' onClick={toggleSidebar}>
        <MenuIcon style={{ fontSize: '2.5rem' }} />
      </div>
      <div className={`sidebar ${isSideOpen ? 'open' : 'closed'}`}>
        <div className='header'></div>
        <div className='content'>
          <div className='item' onClick={() => changeTitle('analytics')}>
            <InsightsIcon style={itemIconStyle} />
            <span className='item-label'>analytics</span>
          </div>
          <div className='item' onClick={() => changeTitle('users')}>
            <PeopleIcon style={itemIconStyle} />
            <span className='item-label'>users</span>
          </div>
          <div className='item' onClick={() => changeTitle('settings')}>
            <SettingsIcon style={itemIconStyle} />
            <span className='item-label'>settings</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
