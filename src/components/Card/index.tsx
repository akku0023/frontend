import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import pic from '../../assets/Images/elephant.png';

type Props = {
    card:{
        image: string;
        team: string;
        heading: string;
    }
};

const CardComponent: FC<Props> = (props): ReactElement => {
  return (
    <Card 
        sx={{ 
            maxWidth: 260,
            minWidth: 260,
        }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={props.card.image}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.card.heading}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.card.team}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;