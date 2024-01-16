import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Sidebar from '../SideBar';
import { List, ListItem } from '@mui/material';
import {Divider} from '@mui/material';
import {Avatar} from '@mui/material';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {ListItemIcon} from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import {Link} from "react-router-dom"
import ArchiveIcon from '@mui/icons-material/Archive';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CartSideBar from '../CartSideBar';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
 
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: "100%", 
    [theme.breakpoints.up('md')]: {
      width: '30vw',
    },
  },
}));

const pages = [{linkURL: "./Furniture", pageName:'Furniture'}, {linkURL: "/Outdoor", pageName: 'Outdoor'}, {linkURL: "/BeddingBath", pageName: 'Bedding & Bath'}, {linkURL: "/Sale", pageName: 'Sale'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", height: "64px"}}>
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'none' },
          marginBottom: 1, // Add some margin to separate from the content below
          justifyContent: 'center', 
          alignItems: "center"
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="secondary"
          sx={{ margin: 0 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page, id) => (
            <MenuItem key={id} onClick={handleCloseNavMenu}>
              <Link to={page.linkURL}>{page.pageName}</Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          flexWrap: 'wrap', // Allow items to wrap onto the next line
          justifyContent: 'center', 
          alignItems: "center",
        }}
      >
        {pages.map((page, id) => (
          <Link 
            to={page.linkURL}
            key={id}
            style={{ margin: '0 4vw', fontSize: '1.2em'}}
            
          >
            {page.pageName}
          </Link>
        ))}
      </Box>
    </Toolbar>
  </Container>
</AppBar>

  );
}

function AccountMenu({haveAccount, setHaveAccount}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, borderRadius:0, display:"flex", alignItems:"center", fontSize:"1em" }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <AccountCircle sx={{color: "white", mr: "10px"}}/>
            <p style={{color:"white", display: haveAccount ? "none" : "block"}}>Sign in</p>
            <p style={{color:"white", display: haveAccount ? "block" : "none"}}>Acount</p>
          </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,

            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: "50%",
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <Link to="/Login">
          <MenuItem sx={{display: haveAccount ? "none" : "flex", ml: "10px", mr: "10px", justifyContent:"center", color: "white", backgroundColor: "rgb(127, 24, 127)", "&:hover": {backgroundColor: "#a05ea6"}, borderRadius: "20px"}}>
            Sign in
          </MenuItem>
        </Link>
        
        <Link to="/">
          <p style={{display: haveAccount ? "none" : "block", textAlign: "center", textDecoration:"underline", fontSize: "1.2em"}}>Create account</p>
        </Link>
        <h2 style={{display: haveAccount ? "block" : "none", margin: "10px 0 10px 20px"}}>Welcome</h2>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <InventoryIcon fontSize="small" />
          </ListItemIcon>
          My Order
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ArchiveIcon fontSize="small" />
          </ListItemIcon>
          Review My Purchase
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CardGiftcardIcon fontSize="small" />
          </ListItemIcon>
          My Giftcard
        </MenuItem>
        <div style={{display: haveAccount ? "block" : "none"}}>
          <Divider/>
          <h2 style={{margin: "10px 0 10px 20px", cursor:"pointer"}} onClick={() => (setHaveAccount(false))}>Log out</h2>
        </div>
        
      </Menu>
    </div>
  );
}

export default function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isCartSidebarVisible, setCartSidebarVisible] = useState(false);
  const {haveAccount, setHaveAccount} = props;
 

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleCartSidebar = () => {
    setCartSidebarVisible(!isCartSidebarVisible);
  };

  const isProfileMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div id="myNavbar" style={{display: "flex", flexDirection:"column"}}>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="sticky" sx={{backgroundColor:"purple"}}>
          <Toolbar sx={{ml: "5vw", mr: "5vw"}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"  
              onClick={toggleSidebar} 
              sx={{ mr: 2}}
            >
              <MenuIcon />
              
            </IconButton>
            {isSidebarVisible && <Sidebar onClose={toggleSidebar} />}
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, color: "white" }}
              >
                Sweethome
              </Typography>
            </Link>
            
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 0.95 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <AccountMenu haveAccount={haveAccount} setHaveAccount={setHaveAccount}/>
              

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={toggleCartSidebar} 
                color="inherit"
                sx={{borderRadius: "0", padding: 0, marginLeft: "30px"}}
              >
                <ShoppingCartCheckoutIcon size="large"/>
                <p style={{fontSize: "0.6em", marginLeft: "10px"}}>Cart</p>
              </IconButton>
              {isCartSidebarVisible && <CartSideBar onClose={toggleCartSidebar} />}
              
              
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>
      <ResponsiveAppBar></ResponsiveAppBar>
    </div>
    
  );
}