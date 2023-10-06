import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/vladeu-logo.jpeg';
import { logout } from '../../features/loginSlice';

interface Props {
  setActiveItem?: (item: string) => void
}

const pages = ['Пользователи', 'Задачи'];

export const Navbar:React.FC<Props> = ({setActiveItem}) => {
	// Состояние для управления открытием и закрытием меню
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(logout({ isLogOut: true }));
    navigate('/login')
};


  return (
    <AppBar position="sticky" color='default' style={{boxShadow: 'none', background: '#f4f3f1'}}>
      <Container maxWidth="xl" className='py-2'>
        <Toolbar disableGutters>
        <div className="w-48 mt-1 mx-auto flex justify-center mr-8" onClick={() => setActiveItem && setActiveItem('Панель владения Vladeu CRM')}>
					<div className="overflow-hidden h-20 rounded-lg flex items-center">
						<img src={logo} alt="Logo" className="object-cover bg-transparent w-full bg-contain" />
					</div>
        </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="аккаунт текущего пользователя"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page) => (
                <MenuItem 
                key={page} 
                onClick={() => {
                  setActiveItem && setActiveItem(page);
                  handleCloseNavMenu();
                }} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  setActiveItem && setActiveItem(page);
                  handleCloseNavMenu();
                }}
                sx={{ mx:2, my: 2, color: '#292929', display: 'block', fontFamily:'sans-serif', fontSize:'16px', borderBottom: '1px solid gray', borderRadius: '0px'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleLogout} sx={{ p: 0 }}>
                <ExitToAppIcon/>
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
