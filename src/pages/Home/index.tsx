import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import image from '../../assets/mainpagebg.png';

const Home: FC = (): ReactElement => {
  return (
    <Box 
      sx={{
        width:'1299px',
        height:'500px',
        }}
      >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          }}
      >
        <img 
          src={image}
          alt='main bg'
          width='100%'
          height='100%'/>
      </Box>
    </Box>
  )
};

export default Home;


