import React, { ReactElement, FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material';
import customTheme from '../../styles/theme';
import { NavLink } from 'react-router-dom';

type Props = {
    pages: string[];
};

type isActiveProps = {
    isActive : boolean
}

const ResponsiveAppBar: FC<Props> = (props): ReactElement => {

    const { pages } = props
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const isActiveStyles = ({ isActive }:isActiveProps) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'normal' : 'underline'
        }
    }

    return (
        <ThemeProvider theme={customTheme}>
        <AppBar position="static" color="secondary">
        <Container maxWidth="lg">
            <Toolbar disableGutters>
            {/* image */}
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
                }}
            >
                TUSKERS
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <ThemeProvider theme={customTheme}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
                >
                <MenuIcon />
                </IconButton>
                </ThemeProvider>
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
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color='black'>
                        <NavLink 
                        style={isActiveStyles}
                        to={`/${page.replace(/\s/g, '').toLowerCase()}`}>
                        {page}</NavLink>
                    </Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            {/* image */}
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
                }}
            >
                TUSKERS
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                >
                    <NavLink style={isActiveStyles} to={`/${page.replace(/\s/g, '').toLowerCase()}`}>{page}</NavLink>
                </Button>
                ))}
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
        </ThemeProvider>
    );
}
export default ResponsiveAppBar;