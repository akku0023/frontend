import React, { ReactElement, FC} from 'react';
import  { AppBar, Box, Toolbar, Button, ThemeProvider, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import customTheme from '../../styles/theme';
import image from '../../assets/Images/peslogo.png';


type Props = {
    pages: string[];
};

const ResponsiveAppBar: FC<Props> = (props): ReactElement => {

    const { pages } = props

    return (
        <ThemeProvider theme={customTheme}>
        <AppBar position='static' color='transparent'>
            <Toolbar style={{ paddingTop: '20px'}}>
            <Link to='/home'>
            <Box position={'relative'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '60px',
                    height: '60px'
                }}
            >
                <img 
                    src={image}
                    alt='logo'
                    width='100%'
                    height='100%'/>
            </Box>
            </Link>
            <Box sx={{ 
                paddingLeft: '60px', 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' } 
                }}
            >
                {pages.map((page) => (
                <NavLink
                    style={{textDecoration: 'none'}}
                    to={`/${page.replace(/\s/g, '').toLowerCase()}`}
                > 
                <Button key={page}
                    sx={{ 
                        my: 2,
                        m: 1,  
                        '&:hover': { 
                            borderBottomStyle: 'solid',
                            borderBottomColor: 'red',
                            borderBottomWidth: '2px',
                            paddingBottom: '2px',
                            transform: 'translateY(-4px)',
                            borderRadius: 0 },
                    }}
                >
                    <Typography sx={{
                        color: 'white',
                        fontSize: '1em',
                        fontFamily: 'Nasalization',
                        }}
                    >
                    {page}
                    </Typography>
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