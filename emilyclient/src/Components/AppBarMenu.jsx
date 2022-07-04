import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Button } from '@mui/material';

export default function AppBarMenu({user, SignInWithGoogle}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseLogin = () => {
    SignInWithGoogle().then(() => handleClose())
  }

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {user.displayName==="" ? <MenuItem onClick={handleCloseLogin}>Login</MenuItem> : <MenuItem onClick={handleClose}>{user.displayName}'s account</MenuItem>}
        <MenuItem onClick={handleClose}>All Items</MenuItem>
      </Menu>
    </div>
  );
}