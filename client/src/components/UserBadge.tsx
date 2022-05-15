import Badge from '@mui/material/Badge'

const UserBadge: React.FC<{ type: 'active' | 'inactive' | 'grace' }> = ({
  type,
}) => {
  let content: 'Active' | 'Inactive' | 'Grace Period'
  let color: 'success' | 'error' | 'warning'
  if (type === 'active') {
    content = 'Active'
    color = 'success'
  } else if (type === 'inactive') {
    content = 'Inactive'
    color = 'error'
  } else {
    content = 'Grace Period'
    color = 'warning'
  }

  return (
    <Badge
      badgeContent={content}
      color={color}
      style={{ marginLeft: 30, whiteSpace: 'nowrap' }}
    />
  )
}

export default UserBadge
