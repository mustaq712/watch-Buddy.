import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom'; 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled} from '@mui/material/styles';

export default function WatchListHeader() {

    const location = useLocation();
    const CustomAppBar = styled(AppBar)({
        backgroundColor: 'black', 
        color :'chocolate'
      });
      
  const getTitle = () => {
    // Determine the title based on the current path
    if (location.pathname === '/watchlist') {
      return 'WatchList';
    } else if (location.pathname === '/search') {
      return 'Search Movie';
    } else if (location.pathname === "/home") {
      return 'Watch Buddy'
    }
    
    return 'Default Title'; // Default title if none of the conditions match
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {getTitle()} {/* Render the dynamic title */}
          </Typography>
         
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
}