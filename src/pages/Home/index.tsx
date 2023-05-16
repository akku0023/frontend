import React, { FC, ReactElement, useState } from 'react';
import { Box, Button, Typography, } from '@mui/material';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import image from '../../assets/Images/playingpes2.png';
import Subheading from '../../components/Subheading';
import CardComponent from '../../components/Card';
import { cards } from '../../assets/Data/latestnews';

const Home: FC = (): ReactElement => {

  const [cardsDisplayed, setCardsDisplayed] = useState<number>(4);
  const [isCardsDisplayed, setIsCardsDisplayed] = useState<boolean>(false);

  const handleScrolling = () => {
    window.scrollTo({
      top: window.pageYOffset + 850,
      behavior: 'smooth',
    });
  };

  const handleCardsDisplayed = () => {
    setIsCardsDisplayed(true);
    setCardsDisplayed(cards.length);
  }

  return (
    <div>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          }}
        >
        <img 
          src={image}
          alt='main bg'
          width='100%'
          height='100%'
          style={{
            filter: 'brightness(50%) blur(2px)'
          }}/>
        <Box position='absolute'
          top='250px'
          left='70px'
        >
          <Typography
            color='white'
            variant='h1'
            fontSize='120px'
            fontWeight='bold'
            fontFamily='Nasalization'
          >
            TUSKERS
          </Typography>
          <Typography
            color='white'
            variant='h3'
            fontWeight='regular'
            fontFamily='Nasalization'
          >
            SOMEKIND OF  TAGLINE
          </Typography>
        </Box>
        <Button
          disableRipple={true}
          onClick={handleScrolling}
          sx={{
            position: 'absolute',
            top: '600px',
            left: '600px',
            '&:hover': {
              backgroundColor: 'transparent',
            }
          }}
        >
          <KeyboardDoubleArrowDownOutlinedIcon 
            fontSize='large'
            sx={{
              color: 'white',
              '&:hover': {
                color: 'red',
              }
            }}/>
        </Button>
      </Box>

      <Box
        sx={{
          marginTop: '120px',

        }}
      >
        <Subheading heading='LATEST NEWS' />
        <Box 
          display='flex'
          flexWrap="wrap"
          flexDirection="row"
          sx={{
            marginLeft: '40px',
            marginRigt: '40px',
          }}
        >
          {cards.map((card) => 
            card.id<=cardsDisplayed? (
              <Box 
                key={card.id} 
                width='25%' 
                pt='70px'
                sx={{
                  '&:hover': { 
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'red',
                    borderBottomWidth: '3px',
                    paddingBottom: '6px',
                    transform: 'translateY(-10px)',
                    borderRadius: 0 },
                }}>

                  <CardComponent card={card} />
              </Box>
            ):null
          )}
        </Box>
        {cardsDisplayed>=4 && !isCardsDisplayed?
          <Button
            onClick={handleCardsDisplayed}
            sx={{
              marginTop: '30px',
              left: '580px',
              fontWeight: 'bold',
              fontFamily: 'Nasalization',
              color: 'red',
              border: 'solid',
              borderWidth: '2px',
            }}
          >
            Show More
          </Button>:null}
      </Box>
    </div>
  )
};

export default Home;


