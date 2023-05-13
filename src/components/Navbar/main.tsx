import React, { ReactElement, FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, Typography } from '@mui/material';
import customTheme from '../../styles/theme';
import { NavLink } from 'react-router-dom';
import image from '../../assets/peslogo.png';
import { Link } from 'react-router-dom';
import 'typeface-montserrat';
import 'typeface-open-sans';

type Props = {
    pages: string[];
};

const ResponsiveAppBar: FC<Props> = (props): ReactElement => {

    const { pages } = props

    return (
        <ThemeProvider theme={customTheme}>
        <AppBar position="static" color="transparent">
            <Toolbar style={{ paddingTop:'20px'}}>
            <Link to='/home'>
            <Box position={'relative'}
                sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width:'100px',
                height:'100px'}}>
                <img 
                    src={image}
                    alt='logo'
                    width='100%'
                    height='100%'/>
            </Box>
            </Link>
            <Box sx={{ 
                paddingLeft:'60px', 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' } 
                }}
            >
                {pages.map((page) => (
                <NavLink
                    style={{textDecoration:'none'}}
                    to={`/${page.replace(/\s/g, '').toLowerCase()}`}
                > 
                <Button key={page}
                    sx={{ my: 2,
                        m:1, 
                        display: '', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        '&:hover': { 
                            borderBottomStyle:'solid',
                            borderBottomColor:'red',
                            borderBottomWidth:'2px',
                            paddingBottom:'2px',
                            transform: 'translateY(-4px)',
                            borderRadius: 0 },
                    }}
                >
                    <Typography sx={{
                        color:'white',
                        fontSize:'1em',
                        fontFamily:'Nasalization',
                        }}
                    >
                    {page}</Typography>
                </Button>
                </NavLink> 
                ))}
            </Box>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    );
}
export default ResponsiveAppBar;