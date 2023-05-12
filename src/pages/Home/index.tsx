import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import image from '../../assets/image4.png';

const Home: FC = (): ReactElement => {
  return (
    <Box 
      sx={{
        width:'1299px',
        height:'500px',
        backgroundColor:'black'}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width:'500px',
          height:'500px'}}>
        <img 
          src={image}
          alt='main bg'
          width='100%'
          height='100%'/>
      </Box>
    </Box>
  );
}

export default Home;
