import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import './header.css'

const Header: React.FC<{ isSideOpen: boolean; title: string }> = ({
  isSideOpen,
  title,
}) => {
  return (
    <div className='header'>
      <h3 className={isSideOpen ? 'title' : 'title side-closed'}>{title}</h3>
      <div className='profile'>
        <AccountCircleIcon style={{ fontSize: '3rem', color: '#ffffff' }} />
        <div className='profile-details'>
          <p className='username'>RmdanJr</p>
          <p className='role'>Admin</p>
        </div>
      </div>
    </div>
  )
}

export default Header
